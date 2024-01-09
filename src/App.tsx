import React, {useState} from "react"
import "./App.css"
import {SoundContext} from "./contexts/SoundContext"
import {Counter} from "./views/Counter"
import {DEFAULT_IS_SOUND, DEFAULT_SOUND_VOLUME} from "./constants/constants"
import {IsSound} from "./components/IsSound/IsSound"
import {Provider} from "react-redux"
import {store} from "./redux/store"

function App() {

    const [isSound, setIsSound] = useState<boolean>(DEFAULT_IS_SOUND)

    const setSound = () => {
        setIsSound(!isSound)
    }

    return (
        <Provider store={store}>
            <SoundContext.Provider value={{volume: DEFAULT_SOUND_VOLUME, isSound: isSound}}>
                <IsSound setSound={setSound}/>
                <Counter/>
            </SoundContext.Provider>
        </Provider>
    )
}

export default App
