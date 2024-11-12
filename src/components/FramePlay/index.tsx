import { type } from '@testing-library/user-event/dist/type';
import React, { useContext, useRef, useMemo, useCallback, useEffect } from 'react';
import { CombinedContext } from '../../store/CombineProvider';
import { STATUS_GAME } from '../../utils/enum';
import { generateRandomPosition } from '../../utils/functions';
import CircleButton from '../CircleButton/CircleButton';

type FramePlayProps = {
    numberOfPoints: any,
};

function FramePlay({ numberOfPoints }: FramePlayProps) {
    const { dispatch } = useContext(CombinedContext);
    const { choseCurrentNumber } = useContext(CombinedContext).state.NumberState;
    const { isReset, status } = useContext(CombinedContext).state.StatusState;
    const boxRef = useRef<HTMLDivElement | null>(null);
    const { isAuto } = useContext(CombinedContext).state.StatusState
    const pressButtonNumber = useCallback(
        (n: number) => {
            if (n === +(numberOfPoints) && n === choseCurrentNumber) { //win
                dispatch({
                    type: 'change_status',
                    payload: STATUS_GAME.ALL_CLEARED,
                });
                dispatch({
                    type: 'set_reset',
                    payload: true,
                });
                return
            } else {
                if (n === choseCurrentNumber) { //next number
                    dispatch({
                        type: 'click',
                        payload: n + 1,
                    });
                } else { //lose
                    dispatch({
                        type: 'set_reset',
                        payload: true,
                    });
                    dispatch({
                        type: 'change_status',
                        payload: STATUS_GAME.GAME_OVER,
                    });
                }
            }

        },
        [dispatch, choseCurrentNumber, numberOfPoints]
    );
    useEffect(() => {
        if (isReset && isAuto) {
            const interval = setInterval(() => {
                pressButtonNumber(choseCurrentNumber);
            }, 500);
            if (status === STATUS_GAME.ALL_CLEARED) {
                clearInterval(interval)
            }
            return () => clearInterval(interval);
        }
    }, [choseCurrentNumber, isReset, status, isAuto]);
    const points = useMemo(() => {
        return Array.from({ length: numberOfPoints }, (_, index) => {
            const position = generateRandomPosition(boxRef);
            return { position, index };
        });
    }, [numberOfPoints]);

    return (
        <div ref={boxRef} className="w-[90%] min-h-[90vh] border-1 border-solid border-black bg-white relative">
            {isReset && points.reverse().map(({ position, index }) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: position?.top,
                        left: position?.left,
                    }}
                >
                    <CircleButton number={index + 1} pressButtonNumber={pressButtonNumber} />
                </div>
            ))}
        </div>
    );
}

export default React.memo(FramePlay);
