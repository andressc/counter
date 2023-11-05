import React from "react"
import styles from "./ErrorMessage.module.css"

type PropsType = {
    errorMessage: string
}
export const ErrorMessage: React.FC<PropsType> = ({errorMessage}) => {
    return (
        <div className={styles.errorMessageWrapper}>
            <span className={styles.errorMessage}>{errorMessage && errorMessage}</span>
        </div>
    )
}