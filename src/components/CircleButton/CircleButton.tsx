import React, { useCallback, useContext, useEffect, useState } from 'react';
import { CombinedContext } from '../../store/CombineProvider';
type CircleButtonProps = {
  number: number,
  pressButtonNumber: Function,
};

function CircleButton({ number, pressButtonNumber }: CircleButtonProps) {
  const choseCurrentNumber = useContext(CombinedContext).state.NumberState.choseCurrentNumber
  const { isAuto } = useContext(CombinedContext).state.StatusState
  const [timer, setTimer] = useState<number>(2);
  const [opacity, setOpacity] = useState(100);
  const [isClick, setClick] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true);

  const onClickButton = useCallback(() => {
    setClick(true);
    pressButtonNumber(number);
  }, [number, pressButtonNumber]);

  useEffect(() => {
    if ((timer > 0 && isClick)) {
      const interval = setInterval(() => {
        setTimer(prevCount => {
          const newCount = Math.max(prevCount - 0.1, 0);
          setOpacity((prevOpacity) => prevOpacity - (2 - 2 / 100));
          if (newCount === 0) {
            setOpacity(0);
            setIsVisible(false);
            clearInterval(interval);
          }
          return newCount;
        });
      }, 10);

      return () => clearInterval(interval);
    }
  }, [timer, isClick]);
  useEffect(() => {
    choseCurrentNumber === number && isAuto && setClick(true)
  }, [choseCurrentNumber, number, isAuto])
  if (!isVisible) {
    return null;
  }

  return (
    <div onClick={onClickButton}
      style={{
        opacity: `${opacity.toFixed(0)}%`,
      }}
      className={`text-black border rounded-full border-solid border-black w-20 h-20 hover:cursor-pointer flex justify-center flex-col items-center ${!isClick ? 'bg-white' : 'bg-red-400'} `}>
      {number}
      <div className='text-blue-800 text-sm'>
        {isClick && timer.toFixed(1)}
      </div>
    </div>
  );
}

export default React.memo(CircleButton);
