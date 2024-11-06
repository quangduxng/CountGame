import React, { useState, useCallback, useContext } from 'react';
import { CombinedContext } from '../../store/CombineProvider';

const ButtonPlay = () => {
    const { state, dispatch } = useContext(CombinedContext)
    const [isPlaying, setIsPlaying] = useState(false);
    // Hàm xử lý khi click vào nút
    const handleButtonClick = (isPlay: boolean) => {
        dispatch({
            type: 'set_reset',
            payload: isPlay
        })
    };

    return (
        <>
            <button onClick={() => handleButtonClick(!state.StatusState.isReset)}>
                {state.StatusState.isReset ? 'RESET' : 'PLAY'}
            </button>

        </>
    );
};

export default ButtonPlay;
