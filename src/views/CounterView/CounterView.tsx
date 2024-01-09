import React from "react"
import {CounterNumber} from "../../components/CounterNumber/CounterNumber"
import {Button} from "../../components/Button/Button"
import {Text} from "../../components/Text/Text"
import {ConfettiComponent} from "../../components/ConfettiComponent/ConfettiComponent"
import {useDispatch, useSelector} from "react-redux"
import {
    addIncrementCounterAC,
    CounterType,
    resetCounterAC,
    setConfettiAC,
    setEditModeAC
} from "../../redux/counter-reducer"
import {getCounter} from "../../selectors/counter-selector"
import {AppRootState} from "../../redux/store"


export const CounterView: React.FC = () => {

    const dispatch = useDispatch()
    const counter: CounterType = useSelector<AppRootState, CounterType>(getCounter)

    const conditionConfetti = counter.currentValue === counter.end && !counter.isConfetti
    const conditionCounterNumber = counter.end === counter.currentValue
    const conditionInc = counter.currentValue >= counter.end
    const conditionReset = counter.currentValue === counter.start

    const incCounter = () => {
        dispatch(addIncrementCounterAC())
    }

    const resetCounter = () => {
        if (counter.currentValue > counter.start) {
            dispatch(resetCounterAC())
            dispatch(setConfettiAC(false))
        }
    }

    const editCounter = () => {
        dispatch(setEditModeAC(true))
    }

    const confettiIsWorked = () => {
        dispatch(dispatch(setConfettiAC(true)))
    }

    return (
        <>
            <ConfettiComponent isConfetti={conditionConfetti} confettiIsWorked={confettiIsWorked}/>
            <CounterNumber value={counter.currentValue} isBig={conditionCounterNumber}/>
            <div className="buttonWrapper">
                <Button title="inc" callBack={incCounter} disabled={conditionInc}/>
                <Button title="reset" callBack={resetCounter} disabled={conditionReset}/>
                <Button title="set" callBack={editCounter}/>
            </div>
            <Text text={`Counter from ${counter.start} to ${counter.end}`}/>
        </>
    )
}