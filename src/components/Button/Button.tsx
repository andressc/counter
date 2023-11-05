import React, {ButtonHTMLAttributes, DetailedHTMLProps, JSX, useContext} from "react"
import styles from "./Button.module.css"
import useSound from "use-sound"
import buttonPress from "../../assets/sounds/buttonPress.mp3"
import {SoundContext} from "../../contexts/SoundContext"

type PropsType = {
    title: string
    callBack: () => void
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: React.FC<PropsType> = ({title, callBack, disabled, ...restProps}): JSX.Element => {

    const context = useContext(SoundContext)

    const [playButtonPress] = useSound(buttonPress, {volume: context.volume, soundEnabled: context.isSound})

    const onClickHandler = () => {
        playButtonPress()
        callBack()
    }

    return (
        <button disabled={disabled} onClick={onClickHandler}
                className={`${styles.button} ${disabled && styles.buttonDisabled}`} {...restProps}>{title}</button>
    )
}