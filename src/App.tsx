import React, { useCallback, useContext, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import ButtonAuto from './components/ButtonAuto';
import ButtonPlay from './components/ButtonPlay';
import FramePlay from './components/FramePlay';
import InputPoints from './components/InputPoints';
import StatusGame from './components/StatusGame';
import Timer from './components/Timer';
import { CombinedContext, CombinedProvider } from './store/CombineProvider';
import { STATUS_GAME } from './utils/enum';

function App() {
  const { dispatch } = useContext(CombinedContext)
  const { isReset, status } = useContext(CombinedContext).state.StatusState
  // const boxRef = useRef<HTMLDivElement | null>(null);
  const [numberOfPoints, setNumberOfPoints] = useState(0)
  useEffect(() => {
    if ((status === STATUS_GAME.ALL_CLEARED && isReset) || (status === STATUS_GAME.GAME_OVER && isReset)) {
      dispatch({
        type: 'click',
        payload: 1,
      });
      dispatch({
        type: 'change_status',
        payload: STATUS_GAME.START,
      });
    }

  }, [isReset, status])

  return (
    <div className='flex justify-center items-start flex-col h-full gap-2 p-[100px]'>
      <CombinedProvider>
        <StatusGame />
        <InputPoints setNumberOfPoints={setNumberOfPoints} />
        <ButtonPlay />
        <Timer />
        <ButtonAuto />
        <FramePlay numberOfPoints={numberOfPoints} />
      </CombinedProvider>

    </div>

  );
}
export default App