import React, {DetailedHTMLProps, HTMLAttributes, JSX} from "react"
import styles from "./CounterNumber.module.css"
import {ConfettiComponent} from "../ConfettiComponent/ConfettiComponent"

type PropsType = {
    value: number
    stopCounter: number
    callBack: () => void
} & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export const CounterNumber: React.FC<PropsType> = ({value, stopCounter, callBack}): JSX.Element => {

    return (
        <>
            <ConfettiComponent value={value} stopCounter={stopCounter}/>
            <span className={`${styles.counter} ${value === stopCounter && styles.counterRed}`} onClick={callBack}>{value}</span>
        </>

    )
}
