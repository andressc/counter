import React, {FC} from "react"

type PropsType = {
    text: string
}
export const Text: FC<PropsType> = ({text}) => {
    return (
        <span>{text}</span>
    )
}
