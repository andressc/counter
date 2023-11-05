import React, {DetailedHTMLProps, HTMLAttributes, JSX} from "react"
import styles from "./CounterNumber.module.css"
import {ConfettiComponent} from "../ConfettiComponent/ConfettiComponent"

type PropsType = {
    value: number
    stopCounter: number
    isConfetti: boolean
    confettiIsWorked: () => void

} & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export const CounterNumber: React.FC<PropsType> = ({value, stopCounter, isConfetti, confettiIsWorked}): JSX.Element => {

    return (
        <>
            <ConfettiComponent value={value} isConfetti={isConfetti} stopCounter={stopCounter} confettiIsWorked={confettiIsWorked}/>
            <span className={`${styles.counter} ${value === stopCounter && styles.counterStop}`}>{value}</span>
        </>

    )
}