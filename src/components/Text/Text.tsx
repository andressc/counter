import React from "react"

type PropsType = {
    text: string
}
export const Text: React.FC<PropsType> = ({text}) => {
    return (
        <span>{text}</span>
    )
}
