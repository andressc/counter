import React, {useState} from "react"
import {Button} from "../Button/Button"
import {Input} from "../Input/Input"
import styles from "./EditCounter.module.css"

type PropsType = {
    setStartCounter: (value: number) => void
    setStopCounter: (value: number) => void
    setCounter: (value: number) => void
    closeEditMode: () => void
    startCounter: number
    stopCounter: number
}

export const EditCounter: React.FC<PropsType> = ({
                                                     setStartCounter,
                                                     setStopCounter,
                                                     startCounter,
                                                     stopCounter,
                                                     closeEditMode,
                                                     setCounter
                                                 }) => {

    const [startValue, setStartValue] = useState<number>(startCounter)
    const [stopValue, setStopValue] = useState<number>(stopCounter)

    const replaceStartValue = (value: number) => setStartValue(value)

    const replaceStopValue = (value: number) => setStopValue(value)

    const updateStartStopCounter = () => {
        setCounter(startValue)
        setStartCounter(startValue)
        setStopCounter(stopValue)
        closeEditMode()
    }
    const closeSettings = () => {
        if (startValue === stopValue) {
            setCounter(startValue)
        }
        closeEditMode()
    }

    const setDisabled = startValue === stopValue || startValue > stopValue

    return (
        <div className={styles.wrapper}>
            <div className={styles.inputWrapper}>
                <Input value={startValue} title="Set start vaule" setValue={replaceStartValue}/>
                <Input value={stopValue} title="Set end vaule" setValue={replaceStopValue}/>
            </div>
            <div className="buttons">
                <Button title="set" callBack={updateStartStopCounter} disabled={setDisabled}/>
                <Button title="close" callBack={closeSettings}/>
            </div>
        </div>
    )
}