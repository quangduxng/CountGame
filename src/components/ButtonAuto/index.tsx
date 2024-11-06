import React, { useCallback, useContext } from 'react'
import { CombinedContext } from '../../store/CombineProvider'

type Props = {}

function ButtonAuto({ }: Props) {
    const { dispatch } = useContext(CombinedContext)
    const { isAuto } = useContext(CombinedContext).state.StatusState
    const onHandleAuto = useCallback(
        () => {
            dispatch({
                type: 'set_auto',
                payload: !isAuto
            })
        }, [isAuto])
    return (
        <button onClick={onHandleAuto}>Auto Play ({!isAuto ? 'ON' : 'OFF'})</button>
    )
}

export default ButtonAuto