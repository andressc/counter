import React, {useContext} from "react"
import styles from "./IsSound.module.css"
import sound from "../../assets/icons/sound.svg"
import {SoundContext} from "../../contexts/SoundContext"

type PropsType = {
    setSound: () => void
}
export const IsSound: React.FC<PropsType> = ({setSound}) => {

    const context = useContext(SoundContext)

    return (
        <div className={styles.wrapper}>
            <img src={sound} className={!context.isSound ? styles.off : ""} onClick={setSound} alt="switch"/>
        </div>
    )
}