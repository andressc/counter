import {applyMiddleware, combineReducers, createStore} from "redux"
import {thunk, ThunkAction, ThunkDispatch} from "redux-thunk"
import {CounterActionsType, counterReducer} from "./counter-reducer"

const rootReducer = combineReducers({
    counter: counterReducer,
})

//, applyMiddleware(thunk)

export type AppRootState = ReturnType<typeof rootReducer>
export type AppActionsType = CounterActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, AppActionsType>
export type AppDispatch = ThunkDispatch<AppRootState, unknown, AppActionsType>
export const store = createStore(rootReducer)

/*store.subscribe(() => {
    console.log('state changed')
})*/