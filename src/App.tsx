import React, { useCallback, useContext, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import ButtonAuto from './components/ButtonAuto';
import ButtonPlay from './components/ButtonPlay';
import FramePlay from './components/FramePlay';
import InputPoints from './components/InputPoints';
import StatusGame from './components/StatusGame';
import Timer from './components/Timer';
import { CombinedContext, CombinedProvider } from './store/CombineProvider';

function App() {
  const { isReset } = useContext(CombinedContext).state.StatusState
  // const boxRef = useRef<HTMLDivElement | null>(null);
  const [numberOfPoints, setNumberOfPoints] = useState(0)

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