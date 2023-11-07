import React, {DetailedHTMLProps, HTMLAttributes, JSX} from "react"
import styles from "./CounterNumber.module.css"

type PropsType = {
    value: number
    isBig: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export const CounterNumber: React.FC<PropsType> = ({value, isBig}): JSX.Element => {

    return <span className={`${styles.counter} ${isBig && styles.counterStop}`}>{value}</span>
}
