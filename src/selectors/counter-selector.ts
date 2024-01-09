import {AppRootState} from "../redux/store"
import {CounterType} from "../redux/counter-reducer"

export const getCounter = (state: AppRootState): CounterType => state.counter
export const getCurrentValue = (state: AppRootState): number => state.counter.currentValue

export const getStartValue = (state: AppRootState): number => state.counter.start

export const getEndValue = (state: AppRootState): number => state.counter.end