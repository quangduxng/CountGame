import React, { useReducer, useState } from 'react';
import './App.css';
import FramePlay from './components/CircleButton/FramePlay';
import Timer from './components/Timer';
import { AppContext, appReducer, InitialAppState } from './store/rootReducer';
enum STATUS_GAME {
  START = "LET'S PLAY",
  GAME_OVER = "GAME OVER",
  ALL_CLEARED = "ALL CLEARED"
}

function App() {

  const [state, dispatch] = useReducer(appReducer, InitialAppState);
  const [numberOfPoints, setNumberOfPoints] = useState<number>(0);
  const [isReset, setIsReset] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='flex justify-center items-start flex-col h-full gap-2 p-[100px]'>
        <div>{STATUS_GAME.START}</div>
        <div>Point:
          <input onChange={(e: any) => { !isReset && setNumberOfPoints(e.target.value) }} type="number" name="numberOfPoints" id="numberOfPoints" />
        </div>
        <button onClick={() => {
          setIsReset(prev => !prev)
        }}>{isReset ? 'Reset' : 'Play'}</button>
        <Timer isReset={isReset} />
        <button>Auto Play (ON)</button>
        <FramePlay isReset={isReset} numberOfPoints={numberOfPoints} />
      </div>
    </AppContext.Provider>

  );
}

export default App;
