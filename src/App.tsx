import React, {JSX, useEffect, useState} from "react"
import "./App.css"
import {EditCounter} from "./components/EditCounter/EditCounter"
import {Counter} from "./components/Counter/Counter"

type localStorageKeyType = "startCounter" | "counter" | "stopCounter"

function App() {

    const defaultStartCounter = 0
    const defaultStopCounter = 5

    const initialState = (teyType: localStorageKeyType, defaultValue: number): number =>
        localStorage.getItem(teyType) == null ? defaultValue : (JSON.parse(localStorage.getItem(teyType)!))

    const [startCounter, setStartCounter] = useState<number>(
        initialState("startCounter", defaultStartCounter)
    )

    const [stopCounter, setStopCounter] = useState<number>(
        initialState("stopCounter", defaultStopCounter)
    )

    const [counter, setCounter] = useState<number>(
        initialState("counter", defaultStartCounter)
    )

    const [editMode, setEditMode] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem("counter", JSON.stringify(counter))
    }, [counter])

    useEffect(() => {
        localStorage.setItem("startCounter", JSON.stringify(startCounter))
        localStorage.setItem("stopCounter", JSON.stringify(stopCounter))
    }, [startCounter, stopCounter])


    const incCounter = () => counter < stopCounter && setCounter(counter => counter + 1)

    const resetCounter = () => counter > startCounter && setCounter(startCounter)

    const editCounter = () => setEditMode(true)

    const closeEditMode = () => setEditMode(false)


    const isEdit: JSX.Element = editMode
        ? <EditCounter setStartCounter={setStartCounter}
                       setStopCounter={setStopCounter}
                       closeEditMode={closeEditMode}
                       setCounter={setCounter}
                       startCounter={startCounter}
                       stopCounter={stopCounter}
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
