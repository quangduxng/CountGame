import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { AppContext } from '../../../store/rootReducer';
import { generateRandomPosition } from '../../../utils/functions';
import CircleButton from '../CircleButton';

type FramePlayProps = {
    numberOfPoints: number;
    isReset: boolean;

}

function FramePlay({ numberOfPoints, isReset }: FramePlayProps) {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const { state } = useContext(AppContext);
    console.log('state', state);

    return (
        <div ref={boxRef} className=" w-[90%] min-h-[90vh] border-1 border-solid border-black bg-white  relative">
            {numberOfPoints > 0 && isReset && Array.from({ length: numberOfPoints }, (_, index) => {
                const position = generateRandomPosition(boxRef);
                return (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: position?.top,
                            left: position?.left,
                        }}
                    >
                        <CircleButton number={index + 1} />
                    </div>
                );
            }).reverse()}
        </div>
    )
}

export default FramePlay