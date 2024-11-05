import React, { useEffect, useReducer, useState, useContext } from 'react'

type TimerProps = {
    timer?: number;
    setTotalTime?: React.Dispatch<React.SetStateAction<number>>;
    isReset: boolean
}

function Timer({ timer, isReset }: TimerProps) {
    const [totalTime, setTotalTime] = useState<number>(0)

    useEffect(() => {
        if (isReset) {
            const timer = setInterval(() => {
                setTotalTime((prevTime: number) => {
                    return prevTime + 0.1
                });
            }, 100);

            return () => clearInterval(timer);
        }
    }, [isReset]);

    return (
        <div>Time: {totalTime.toFixed(1)}s

        </div>
    )
}

export default Timer