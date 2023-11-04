import React, {ChangeEvent, useEffect, useState} from "react"
import styles from "./Input.module.css"
import {Button} from "../Button/Button"


type PropsType = {
    title: string
    value: number
    setValue: (value: number) => void
}

export const Input: React.FC<PropsType> = ({value, title, setValue}) => {

    const [inputValue, setInputValue] = useState<number>((value))

    useEffect(() => {
            setValue(inputValue)
    }, [inputValue])

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(+e.currentTarget.value.replace(/\D/g, ""))
    }

    const increment = () => setInputValue(inputValue + 1)

    const decrement = () => {
        if (inputValue > 0) setInputValue(inputValue - 1)
    }

    return (
        <div className={styles.container}>
            <span>{title}</span>
            <div className={styles.wrapper}>
                <input type="text" value={inputValue} onChange={onchangeHandler} className={styles.input}/>
                <Button title="+" callBack={increment} style={{width: "50px"}}/>
                <Button title="-" callBack={decrement} style={{width: "50px"}} disabled={inputValue === 0}/>
            </div>
        </div>
    )
}