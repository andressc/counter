import React from "react"
import {CounterNumber} from "../CounterNumber/CounterNumber"
import {Button} from "../Button/Button"

type PropsType = {
    startCounter: number
    stopCounter: number
    counter: number
    incCounter: () => void
    resetCounter: () => void
    editCounter: () => void
}

export const Counter: React.FC<PropsType> = ({
                                                 startCounter,
                                                 stopCounter,
                                                 counter,
                                                 incCounter,
                                                 resetCounter,
                                                 editCounter
                                             }) => {

    return (
        <>
            <CounterNumber value={counter} stopCounter={stopCounter} callBack={incCounter}/>
            <div className="buttons">
                <Button title="inc" callBack={incCounter} disabled={counter >= stopCounter}/>
                <Button title="reset" callBack={resetCounter} disabled={counter === startCounter}/>
                <Button title="set" callBack={editCounter}/>
            </div>
        </>
    )
}