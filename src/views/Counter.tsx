import React, {JSX, useEffect, useState} from "react"
import {
    COUNTER_STORAGE_KEY, DEFAULT_IS_CONFETTI,
    DEFAULT_START_COUNTER,
    DEFAULT_STOP_COUNTER, IS_CONFETTI_STORAGE_KEY,
    START_COUNTER_STORAGE_KEY,
    STOP_COUNTER_STORAGE_KEY
} from "../constants/constants"
import {EditCounterView} from "./EditCounterView/EditCounterView"
import {CounterView} from "./CounterView/CounterView"
import {createStateBoolean, createStateNumber} from "../helpers/helpers"

export const Counter: React.FC = () => {
    const [startCounter, setStartCounter] = useState<number>(
        createStateNumber(START_COUNTER_STORAGE_KEY, DEFAULT_START_COUNTER)
    )

    const [stopCounter, setStopCounter] = useState<number>(
        createStateNumber(STOP_COUNTER_STORAGE_KEY, DEFAULT_STOP_COUNTER)
    )

    const [counter, setCounter] = useState<number>(
        createStateNumber(COUNTER_STORAGE_KEY, DEFAULT_START_COUNTER)
    )

    const [confettiWorked, setConfettiWorked] = useState<boolean>(
        createStateBoolean(IS_CONFETTI_STORAGE_KEY, DEFAULT_IS_CONFETTI)
    )

    const [editMode, setEditMode] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem(COUNTER_STORAGE_KEY, JSON.stringify(counter))
    }, [counter])

    useEffect(() => {
        localStorage.setItem(IS_CONFETTI_STORAGE_KEY, JSON.stringify(confettiWorked))
    }, [confettiWorked])

    useEffect(() => {
        localStorage.setItem(START_COUNTER_STORAGE_KEY, JSON.stringify(startCounter))
        localStorage.setItem(STOP_COUNTER_STORAGE_KEY, JSON.stringify(stopCounter))
    }, [startCounter, stopCounter])

    const confettiIsWorked = () => setConfettiWorked(true)
    const confettiIsDontWorked = () => setConfettiWorked(false)

    const incCounter = () => counter < stopCounter && setCounter(counter => counter + 1)

    const resetCounter = () => {
        if (counter > startCounter) {
            setCounter(startCounter)
            confettiIsDontWorked()
        }
    }

    /*const [running, setRunning] = useState(false)
    const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (running) {
            intervalIdRef.current = setInterval(() => {
                setCounter(counter => counter + 1)
            }, 1000)
        }

        // Проверка на достижение 5 секунд
        if (counter >= stopCounter) {
            setRunning(false)
            if(intervalIdRef.current) clearInterval(intervalIdRef.current)
        }

        // Очистка интервала при размонтировании компонента
        return () => {
            if(intervalIdRef.current) clearInterval(intervalIdRef.current)
        }
    }, [counter, running])


    const incCounterAuto = () => {
        setRunning(true)
    }*/

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
                       isConfetti={confettiWorked}
                       confettiIsWorked={confettiIsWorked}
        />

    return (
            <div className="App">
                {isEdit}
            </div>
    )
}