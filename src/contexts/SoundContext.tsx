import {createContext} from "react"
import {DEFAULT_IS_SOUND, DEFAULT_SOUND_VOLUME} from "../constants"

type SoundContextType = {
    volume: number
    isSound: boolean
}

const initialContext: SoundContextType = {
    volume: DEFAULT_SOUND_VOLUME,
    isSound: DEFAULT_IS_SOUND
}

export const SoundContext = createContext<SoundContextType>(initialContext)