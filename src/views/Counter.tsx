import React, {JSX} from "react"
import {EditCounterView} from "./EditCounterView/EditCounterView"
import {CounterView} from "./CounterView/CounterView"
import {CounterType} from "../redux/counter-reducer"
import {useSelector} from "react-redux"
import {getCounter} from "../selectors/counter-selector"

export const Counter: React.FC = () => {

    const counter: CounterType = useSelector(getCounter)

    const isEdit: JSX.Element = counter.editMode
        ? <EditCounterView/>
        : <CounterView />

    return (
        <div className="App">
            {isEdit}
        </div>
    )
}