import React from "react"
import {CounterNumber} from "../../components/CounterNumber/CounterNumber"
import {Button} from "../../components/Button/Button"
import {Text} from "../../components/Text/Text"

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

    return (
        <>
            <CounterNumber value={counter}
                           stopCounter={stopCounter}
                           isConfetti={isConfetti}
                           confettiIsWorked={confettiIsWorked}
            />
            <div className="buttonWrapper">
                <Button title="inc" callBack={incCounter} disabled={counter >= stopCounter}/>
                <Button title="reset" callBack={resetCounter} disabled={counter === startCounter}/>
                <Button title="set" callBack={editCounter}/>
            </div>
            <Text text={`Counter from ${startCounter} to ${stopCounter}`}/>
        </>
    )
}