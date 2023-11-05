import React from "react"
import {CounterNumber} from "../CounterNumber/CounterNumber"
import {Button} from "../Button/Button"

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

export const Counter: React.FC<PropsType> = ({
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
                           callBack={incCounter}
                           isConfetti={isConfetti}
                           confettiIsWorked={confettiIsWorked}
            />
            <div className="buttons">
                <Button title="inc" callBack={incCounter} disabled={counter >= stopCounter}/>
                <Button title="reset" callBack={resetCounter} disabled={counter === startCounter}/>
                <Button title="set" callBack={editCounter}/>
            </div>
            <span>Counter from {startCounter} to {stopCounter}</span>
        </>
    )
}