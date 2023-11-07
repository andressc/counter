import React from "react"
import {CounterNumber} from "../../components/CounterNumber/CounterNumber"
import {Button} from "../../components/Button/Button"
import {Text} from "../../components/Text/Text"
import {ConfettiComponent} from "../../components/ConfettiComponent/ConfettiComponent"

type PropsType = {
    startCounter: number
    stopCounter: number
    counter: number
    isConfetti: boolean
    incCounter: () => void
    resetCounter: () => void
    editCounter: () => void
    confettiIsWorked: () => void
}

export const CounterView: React.FC<PropsType> = ({
                                                     startCounter,
                                                     stopCounter,
                                                     counter,
                                                     isConfetti,
                                                     incCounter,
                                                     resetCounter,
                                                     editCounter,
                                                     confettiIsWorked
                                                 }) => {

    const conditionConfetti = counter === stopCounter && !isConfetti
    const conditionCounterNumber = stopCounter === counter
    const conditionInc = counter >= stopCounter
    const conditionReset = counter === startCounter

    return (
        <>
            <ConfettiComponent isConfetti={conditionConfetti} confettiIsWorked={confettiIsWorked}/>
            <CounterNumber value={counter} isBig={conditionCounterNumber}/>
            <div className="buttonWrapper">
                <Button title="inc" callBack={incCounter} disabled={conditionInc}/>
                <Button title="reset" callBack={resetCounter} disabled={conditionReset}/>
                <Button title="set" callBack={editCounter}/>
            </div>
            <Text text={`Counter from ${startCounter} to ${stopCounter}`}/>
        </>
    )
}