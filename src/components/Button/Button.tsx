import React, {ButtonHTMLAttributes, DetailedHTMLProps, JSX} from "react"
import styles from "./Button.module.css"

type PropsType = {
    title: string
    callBack: () => void
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: React.FC<PropsType> = ({title, callBack, disabled, ...restProps}): JSX.Element => {

    return (
        <button disabled={disabled} onClick={callBack}
                className={`${styles.button} ${disabled && styles.buttonDisabled}`} {...restProps}>{title}</button>
    )
}