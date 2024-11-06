import React, { useState, useCallback, useContext } from 'react';
import { CombinedContext } from '../../store/CombineProvider';
import { STATUS_GAME } from '../../utils/enum';

const ButtonPlay = () => {
    const { state, dispatch } = useContext(CombinedContext)

    const handleButtonClick = (isPlay: boolean) => {
        console.log('isPlay', isPlay);

        !isPlay && dispatch({
            type: 'change_status',
            payload: STATUS_GAME.START
        })
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
