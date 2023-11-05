import React from "react"
import {Text} from "../../components/Text/Text"
import {Button} from "../../components/Button/Button"
import styles from "./SoundView.module.css"

type PropsType = {
    soundDialogYes: () => void
    soundDialogNo: () => void
}
export const SoundView: React.FC<PropsType> = ({soundDialogYes, soundDialogNo}) => {
    return (
        <div className={styles.wrapper}>
            <Text text="Turn on the sound?"/>
            <div className="buttonWrapper">
                <Button title="yes" callBack={soundDialogYes}/>
                <Button title="no" callBack={soundDialogNo}/>
            </div>
        </div>
    )
}