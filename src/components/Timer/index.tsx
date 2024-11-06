import React, { useEffect, useReducer, useState, useContext } from 'react'
import { CombinedContext } from '../../store/CombineProvider';
import { STATUS_GAME } from '../../utils/enum';

type TimerProps = {
    timer?: number;
    setTotalTime?: React.Dispatch<React.SetStateAction<number>>;
    isReset: boolean
}

function Timer() {
    const [totalTime, setTotalTime] = useState<number>(0)
    const { isReset, status } = useContext(CombinedContext).state.StatusState
    useEffect(() => {

        if (isReset) {
            const timer = setInterval(() => {
                setTotalTime((prevTime: number) => {
                    return prevTime + 0.1
                });
            }, 100);
            if (status === STATUS_GAME.ALL_CLEARED || status === STATUS_GAME.GAME_OVER) {
                clearInterval(timer)
            }
            return () => clearInterval(timer);
        } else {
            setTotalTime(0)
        }
    }, [isReset, status]);

    return (
        <div>Time: {totalTime.toFixed(1)}s
        </div>
    )
}

export default Timer