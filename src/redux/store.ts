import {combineReducers, legacy_createStore} from "redux"
import {ThunkAction, ThunkDispatch} from "redux-thunk"
import {CounterActionsType, counterReducer} from "./counter-reducer"
import {loadState, saveState} from "../utils/localstorage-utils"

const rootReducer = combineReducers({
    counter: counterReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>
export type AppActionsType = CounterActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, AppActionsType>
export type AppDispatch = ThunkDispatch<AppRootState, unknown, AppActionsType>

export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState(store.getState())
})