import React, {FC, useContext, useEffect, useState} from "react"
import Confetti from "react-dom-confetti"
import useSound from "use-sound"
import applause from '../../assets/sounds/applause.mp3';
import fireCracker from '../../assets/sounds/fireCracker.mp3';
import {SoundContext} from "../../contexts/SoundContext"

type PropsType = {
    isConfetti: boolean
    confettiIsWorked: () => void
}

export const ConfettiComponent: FC<PropsType> = ({isConfetti, confettiIsWorked}) => {
    const [isConfettiActive, setConfettiActive] = useState(false)

    const context = useContext(SoundContext)

    const [playFirecracker] = useSound(fireCracker, {volume: context.volume, soundEnabled: context.isSound});
    const [playApplause] = useSound(applause, {volume: context.volume, soundEnabled: context.isSound});

    useEffect(() => {
        if (isConfetti) {

            confettiIsWorked()

            playFirecracker()
            playApplause()

            setConfettiActive(true)

            setTimeout(() => {
                setConfettiActive(false)
            }, 100)
        }
    }, [isConfetti])

    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    }

    return (
        <div style={{position: "relative", top: "95px", left: "-20px"}}>
            <Confetti active={isConfettiActive} config={config}/>
        </div>
    )
}