import React, {JSX, useEffect, useState} from "react"
import "./App.css"
import {EditCounterView} from "./views/EditCounterView/EditCounterView"
import {CounterView} from "./views/CounterView/CounterView"
import {
    COUNTER_STORAGE_KEY, DEFAULT_IS_CONFETTI, DEFAULT_IS_SOUND, DEFAULT_SOUND_VOLUME,
    DEFAULT_START_COUNTER,
    DEFAULT_STOP_COUNTER, IS_CONFETTI_STORAGE_KEY,
    START_COUNTER_STORAGE_KEY,
    STOP_COUNTER_STORAGE_KEY,
} from "./constants/constants"
import {IsSound} from "./components/IsSound/IsSound"
import {SoundContext} from "./contexts/SoundContext"

type localStorageKeyType =
    typeof START_COUNTER_STORAGE_KEY
    | typeof STOP_COUNTER_STORAGE_KEY
    | typeof COUNTER_STORAGE_KEY
    | typeof IS_CONFETTI_STORAGE_KEY

const createStateNumber = (keyType: localStorageKeyType, defaultValue: number): number =>
    localStorage.getItem(keyType) == null ? defaultValue : (JSON.parse(localStorage.getItem(keyType)!))

const createStateBoolean = (keyType: localStorageKeyType, defaultValue: boolean): boolean =>
    localStorage.getItem(keyType) == null ? defaultValue : (JSON.parse(localStorage.getItem(keyType)!))

function App() {

    const [startCounter, setStartCounter] = useState<number>(
        createStateNumber(START_COUNTER_STORAGE_KEY, DEFAULT_START_COUNTER)
    )

    const [stopCounter, setStopCounter] = useState<number>(
        createStateNumber(STOP_COUNTER_STORAGE_KEY, DEFAULT_STOP_COUNTER)
    )

    const [counter, setCounter] = useState<number>(
        createStateNumber(COUNTER_STORAGE_KEY, DEFAULT_START_COUNTER)
    )

    const [isConfetti, setIsConfetti] = useState<boolean>(
        createStateBoolean(IS_CONFETTI_STORAGE_KEY, DEFAULT_IS_CONFETTI)
    )

    const [isSound, setIsSound] = useState<boolean>(DEFAULT_IS_SOUND)

    const [editMode, setEditMode] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem(COUNTER_STORAGE_KEY, JSON.stringify(counter))
    }, [counter])

    useEffect(() => {
        localStorage.setItem(IS_CONFETTI_STORAGE_KEY, JSON.stringify(isConfetti))
    }, [isConfetti])

    useEffect(() => {
        localStorage.setItem(START_COUNTER_STORAGE_KEY, JSON.stringify(startCounter))
        localStorage.setItem(STOP_COUNTER_STORAGE_KEY, JSON.stringify(stopCounter))
    }, [startCounter, stopCounter])

    const setSound = () => {
        setIsSound(!isSound)
    }

    const confettiIsWorked = () => setIsConfetti(true)
    const confettiIsDontWorked = () => setIsConfetti(false)

    const incCounter = () => counter < stopCounter && setCounter(counter => counter + 1)

    const resetCounter = () => {
        if (counter > startCounter) {
            setCounter(startCounter)
            confettiIsDontWorked()
        }
    }

    const editCounter = () => setEditMode(true)

    const isEditMode = () => setEditMode(false)

    const isEdit: JSX.Element = editMode
        ? <EditCounterView setStartCounter={setStartCounter}
                           setStopCounter={setStopCounter}
                           isEditMode={isEditMode}
                           setCounter={setCounter}
                           confettiIsDontWorked={confettiIsDontWorked}
                           startCounter={startCounter}
                           stopCounter={stopCounter}
        />
        : <CounterView startCounter={startCounter}
                       stopCounter={stopCounter}
                       counter={counter}
                       editCounter={editCounter}
                       incCounter={incCounter}
                       resetCounter={resetCounter}
                       isConfetti={isConfetti}
                       confettiIsWorked={confettiIsWorked}
        />

    return (
        <SoundContext.Provider value={{volume: DEFAULT_SOUND_VOLUME, isSound: isSound}}>
            <IsSound setSound={setSound}/>
            <div className="App">
                {isEdit}
            </div>
        </SoundContext.Provider>
    )
}

export default App
