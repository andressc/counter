import React, {JSX, useEffect, useState} from "react"
import "./App.css"
import {EditCounter} from "./components/EditCounter/EditCounter"
import {Counter} from "./components/Counter/Counter"
import {
    COUNTER_STORAGE_KEY,
    DEFAULT_START_COUNTER,
    DEFAULT_STOP_COUNTER,
    START_COUNTER_STORAGE_KEY,
    STOP_COUNTER_STORAGE_KEY
} from "./constants"

type localStorageKeyType = "startCounter" | "counter" | "stopCounter"

const createInitialState = (keyType: localStorageKeyType, defaultValue: number): number =>
    localStorage.getItem(keyType) == null ? defaultValue : (JSON.parse(localStorage.getItem(keyType)!))

function App() {

    const [startCounter, setStartCounter] = useState<number>(
        createInitialState(START_COUNTER_STORAGE_KEY, DEFAULT_START_COUNTER)
    )

    const [stopCounter, setStopCounter] = useState<number>(
        createInitialState(STOP_COUNTER_STORAGE_KEY, DEFAULT_STOP_COUNTER)
    )

    const [counter, setCounter] = useState<number>(
        createInitialState(COUNTER_STORAGE_KEY, DEFAULT_START_COUNTER)
    )

    const [editMode, setEditMode] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem(COUNTER_STORAGE_KEY, JSON.stringify(counter))
    }, [counter])

    useEffect(() => {
        localStorage.setItem(START_COUNTER_STORAGE_KEY, JSON.stringify(startCounter))
        localStorage.setItem(STOP_COUNTER_STORAGE_KEY, JSON.stringify(stopCounter))
    }, [startCounter, stopCounter])


    const incCounter = () => counter < stopCounter && setCounter(counter => counter + 1)

    const resetCounter = () => counter > startCounter && setCounter(startCounter)

    const editCounter = () => setEditMode(true)

    const isEditMode = () => setEditMode(false)


    const isEdit: JSX.Element = editMode
        ? <EditCounter setStartCounter={setStartCounter}
                       setStopCounter={setStopCounter}
                       isEditMode={isEditMode}
                       setCounter={setCounter}
                       startCounter={startCounter}
                       stopCounter={stopCounter}
                       counter={counter}
        />
        : <Counter startCounter={startCounter}
                   stopCounter={stopCounter}
                   counter={counter}
                   editCounter={editCounter}
                   incCounter={incCounter}
                   resetCounter={resetCounter}
        />


    return (
        <div className="App">
            {isEdit}
        </div>
    )
}

export default App
