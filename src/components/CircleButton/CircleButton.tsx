import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { appReducer, InitialAppState } from '../../store/rootReducer';

type CircleButtonProps = {
  number: number,
  onCheckClickButton?: Function;
}

function CircleButton({ number, onCheckClickButton, }: CircleButtonProps) {
  const [timer, setTimer] = useState<number>(3)
  const [opacity, setOpacity] = useState(100);
  const [isClick, setClick] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState(true);
  const [appState, dispatch] = useReducer(appReducer, InitialAppState);
  const onClickButton = useCallback(() => {
    onCheckClickButton && onCheckClickButton(number)
    setClick(true)
    dispatch({
      type: 'click',
      payload: number
    })
  }, [number])

  useEffect(() => {
    if (timer > 0 && isClick) {
      const interval = setInterval(() => {
        setTimer(prevCount => {
          const newCount = Math.max(prevCount - 0.1, 0);
          setOpacity((prevOpacity) => prevOpacity - (3 - 3 / 100));
          if (newCount === 0) {
            setOpacity(0)
            setIsVisible(false);
            clearInterval(interval);
          }
          return newCount;
        });

      }, 100);

      return () => clearInterval(interval);
    }
  }, [timer, isClick]);
  if (!isVisible) {
    return null;
  }
  return (
    <div onClick={onClickButton}
      style={{
        opacity: `${opacity.toFixed(0)}%`
      }}

      className={`text-black border rounded-full border-solid border-black w-20 h-20 hover:cursor-pointer flex justify-center flex-col items-center ${!isClick ? 'bg-white' : 'bg-red-400'} `}>
      {number}
      <div className='text-blue-800 text-sm'>
        {isClick && timer.toFixed(1)}
      </div>
    </div>
  )
}

export default CircleButton