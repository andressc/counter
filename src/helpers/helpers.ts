import {
    COUNTER_STORAGE_KEY,
    IS_CONFETTI_STORAGE_KEY,
    START_COUNTER_STORAGE_KEY,
    STOP_COUNTER_STORAGE_KEY
} from "../constants/constants"

type localStorageKeyType =
    typeof START_COUNTER_STORAGE_KEY
    | typeof STOP_COUNTER_STORAGE_KEY
    | typeof COUNTER_STORAGE_KEY
    | typeof IS_CONFETTI_STORAGE_KEY
export const createStateNumber = (keyType: localStorageKeyType, defaultValue: number): number =>
    localStorage.getItem(keyType) == null ? defaultValue : (JSON.parse(localStorage.getItem(keyType)!))

export const createStateBoolean = (keyType: localStorageKeyType, defaultValue: boolean): boolean =>
    localStorage.getItem(keyType) == null ? defaultValue : (JSON.parse(localStorage.getItem(keyType)!))