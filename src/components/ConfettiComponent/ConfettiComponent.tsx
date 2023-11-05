import React, {useEffect, useState} from "react"
import Confetti from "react-dom-confetti"
import useSound from "use-sound"
import applause from '../../assets/sounds/applause.mp3';
import firecracker from '../../assets/sounds/firecracker.mp3';

type PropsType = {
    value: number
    stopCounter: number
    isConfetti: boolean
    confettiIsWorked: () => void
}

export const ConfettiComponent: React.FC<PropsType> = ({value, stopCounter, isConfetti, confettiIsWorked}) => {
    const [isConfettiActive, setConfettiActive] = useState(false)

    const [playFirecracker] = useSound(firecracker, {volume: 0.1});
    const [playApplause] = useSound(applause, {volume: 0.1});

    useEffect(() => {
        if (value === stopCounter && !isConfetti) {

            confettiIsWorked()

            playFirecracker()
            playApplause()

            setConfettiActive(true)

            setTimeout(() => {
                setConfettiActive(false)
            }, 2000)
        }
    }, [value])

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