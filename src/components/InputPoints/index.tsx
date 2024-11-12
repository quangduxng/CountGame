import React, { useContext, useEffect } from 'react'
import { CombinedContext } from '../../store/CombineProvider'
import { STATUS_GAME } from '../../utils/enum'

const InputPoints = ({ setNumberOfPoints }: { setNumberOfPoints: Function }) => {
    const { dispatch } = useContext(CombinedContext)
    const { status } = useContext(CombinedContext).state.StatusState
    useEffect(() => {
        status === STATUS_GAME.GAME_OVER && dispatch({
            type: 'set_number_points',
            numberOfPoints: 0
        })
    }, [status])
    return (
        <div>Point:
            <input onChange={(e: any) => {
                dispatch({
                    type: 'set_reset',
                    payload: false
                })
                setNumberOfPoints(e.target.value)
                dispatch({
                    type: 'set_number_points',
                    payload: e.target.value
                })
            }} type="number" name="numberOfPoints" id="numberOfPoints" />
        </div>
    )
}

export default React.memo(InputPoints);