import React, { useContext } from 'react'
import { CombinedContext } from '../../store/CombineProvider'
import { STATUS_GAME } from '../../utils/enum'

type StatusGameProps = {}

function StatusGame({ }: StatusGameProps) {
    const { state } = useContext(CombinedContext)
    const status = state.StatusState.status
    return (
        <div className={`${status === STATUS_GAME.ALL_CLEARED ? 'text-green-500' : status === STATUS_GAME.GAME_OVER ? 'text-red-500' : 'text-black'}  font-bold text-2xl`}>{status}</div>
    )
}

export default React.memo(StatusGame);