import React, {useContext, useEffect, useState} from "react"
import {Button} from "../Button/Button"
import {Input} from "../Input/Input"
import styles from "./EditCounter.module.css"
import useSound from "use-sound"
import errorSound from "../../assets/sounds/error.mp3"
import {SoundContext} from "../../contexts/SoundContext"

type PropsType = {
    setStartCounter: (value: number) => void
    setStopCounter: (value: number) => void
    setCounter: (value: number) => void
    isEditMode: () => void
    confettiIsDontWorked: () => void
    startCounter: number
    stopCounter: number
}

export const EditCounter: React.FC<PropsType> = ({
                                                     setStartCounter,
                                                     setStopCounter,
                                                     confettiIsDontWorked,
                                                     startCounter,
                                                     stopCounter,
                                                     isEditMode,
                                                     setCounter,
                                                 }) => {

    const [startValue, setStartValue] = useState<number>(startCounter)
    const [stopValue, setStopValue] = useState<number>(stopCounter)

    const [errorMessage, setErrorMessage] = useState<string>("")

    const context = useContext(SoundContext)
    const [playErrorSound] = useSound(errorSound, {volume: context.volume, soundEnabled: context.isSound });

    useEffect(() => {
        setErrorMessage("")

        if (startValue === stopValue) {
            playErrorSound()
            setErrorMessage("Values cannot be equal to!")
        }

        if (startValue > stopValue) {
            playErrorSound()
            setErrorMessage("Start value cannot be greater than end value!")
        }
    }, [startValue, stopValue])

    const replaceStartValue = (value: number) => setStartValue(value)

    const replaceStopValue = (value: number) => setStopValue(value)

    const updateStartStopCounter = () => {
        setCounter(startValue)
        setStartCounter(startValue)
        setStopCounter(stopValue)
        confettiIsDontWorked()
        isEditMode()
    }
    const closeSettings = () => {
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