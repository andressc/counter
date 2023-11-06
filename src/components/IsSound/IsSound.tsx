import React, {useContext} from "react"
import styles from "./IsSound.module.css"
import sound from "../../assets/icons/sound.svg"
import {SoundContext} from "../../contexts/SoundContext"
import useSound from "use-sound"
import buttonPress from "../../assets/sounds/buttonPress.mp3"

type PropsType = {
    setSound: () => void
}
export const IsSound: React.FC<PropsType> = ({setSound}) => {

    const context = useContext(SoundContext)

    const [playButtonPress] = useSound(buttonPress, {volume: context.volume, soundEnabled: context.isSound})

    const onclickHandler = () => {
        playButtonPress()
        setSound()
    }


    return (
        <div className={styles.wrapper}>
            <img src={sound} className={!context.isSound ? styles.off : ""} onClick={onclickHandler} alt="switch"/>
        </div>
    )
}