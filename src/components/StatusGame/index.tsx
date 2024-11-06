import React, { useContext } from 'react'
import { CombinedContext } from '../../store/CombineProvider'

type StatusGameProps = {}

function StatusGame({ }: StatusGameProps) {
    const { state } = useContext(CombinedContext)
    return (
        <div>{state.StatusState.status}</div>
    )
}

export default React.memo(StatusGame);