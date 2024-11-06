import React, { useCallback, useContext, useEffect } from 'react'
import { CombinedContext } from '../../store/CombineProvider'

type Props = {}

function ButtonAuto({ }: Props) {
    const { dispatch } = useContext(CombinedContext)
    const { isAuto, isReset } = useContext(CombinedContext).state.StatusState
    const onHandleAuto = useCallback(
        () => {
            dispatch({
                type: 'set_auto',
                payload: !isAuto
            })
        }, [isAuto])
    useEffect(() => {
        if (isReset) {
            dispatch({
                type: 'click',
                payload: 1,
            });
        }
    }, [isReset])
    return (
        <button onClick={onHandleAuto}>Auto Play ({!isAuto ? 'ON' : 'OFF'})</button>
    )
}

export default ButtonAuto