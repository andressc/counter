import React, {useEffect, useState} from "react"
import {Button} from "../Button/Button"
import {Input} from "../Input/Input"
import styles from "./EditCounter.module.css"

type PropsType = {
    setStartCounter: (value: number) => void
    setStopCounter: (value: number) => void
    setCounter: (value: number) => void
    isEditMode: () => void
    startCounter: number
    stopCounter: number
    counter: number
}

export const EditCounter: React.FC<PropsType> = ({
                                                     setStartCounter,
                                                     setStopCounter,
                                                     startCounter,
                                                     stopCounter,
                                                     isEditMode,
                                                     setCounter,
                                                     counter
                                                 }) => {

    const [startValue, setStartValue] = useState<number>(startCounter)
    const [stopValue, setStopValue] = useState<number>(stopCounter)

    const [errorMessage, setErrorMessage] = useState<string>("")

    useEffect(() => {
        if (startValue === stopValue) setErrorMessage("Values cannot be equal to!")
        if (startValue > stopValue) setErrorMessage("Start value cannot be greater than end value!")
        if (startValue !== stopValue && startValue < stopValue) setErrorMessage("")

    }, [startValue, stopValue])

    const replaceStartValue = (value: number) => setStartValue(value)

    const replaceStopValue = (value: number) => setStopValue(value)

    const updateStartStopCounter = () => {
        setCounter(startValue)
        setStartCounter(startValue)
        setStopCounter(stopValue)
        isEditMode()
    }
    const closeSettings = () => {
        if (counter === stopValue) {
            setCounter(startValue)
        }
        isEditMode()
    }

    const setDisabled = startValue === stopValue || startValue > stopValue

    return (
        <div className={styles.wrapper}>
            <div className={styles.inputWrapper}>
                <Input value={startValue} title="Set start vaule" setValue={replaceStartValue}/>
                <Input value={stopValue} title="Set end vaule" setValue={replaceStopValue}/>
                <div className={styles.errorMessageWrapper}>
                    <span className={styles.errorMessage}>{errorMessage && errorMessage}</span>
                </div>
            </div>
            <div className="buttons">
                <Button title="set" callBack={updateStartStopCounter} disabled={setDisabled}/>
                <Button title="close" callBack={closeSettings}/>
            </div>
        </div>
    )
}