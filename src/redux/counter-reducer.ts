export type CounterActionsType =
    AddIncrementCounterType
    | EditStartEndType
    | ResetCounterType
    | SetEditModeType
    | SetConfettiType

const initialState: CounterType = {
    currentValue: 0,
    start: 0,
    end: 5,
    editMode: false,
    isConfetti: false
}

export type CounterType = {
    currentValue: number
    start: number
    end: number
    editMode: boolean
    isConfetti: boolean
}

export const counterReducer = (state: CounterType = initialState, action: CounterActionsType): CounterType => {
    switch (action.type) {
        case "ADD-INCREMENT-COUNTER":
            return {...state, currentValue: state.currentValue + 1}
        case "RESET-COUNTER":
            return {...state, currentValue: state.start}
        case "EDIT-START-END":
            return {...state, start: action.payload.start, end: action.payload.end}
        case "SET-EDIT-MODE":
            return {...state, editMode: action.payload.isEdit}
        case "SET-CONFETTI":
            return {...state, isConfetti: action.payload.isConfetti}
        default:
            return state
    }
}

type AddIncrementCounterType = ReturnType<typeof addIncrementCounterAC>
export const addIncrementCounterAC = () =>
    ({type: "ADD-INCREMENT-COUNTER"} as const)

type EditStartEndType = ReturnType<typeof editStartEndAC>
export const editStartEndAC = (start: number, end: number) =>
    ({type: "EDIT-START-END", payload: {start, end}} as const)

type ResetCounterType = ReturnType<typeof resetCounterAC>
export const resetCounterAC = () =>
    ({type: "RESET-COUNTER"} as const)

type SetEditModeType = ReturnType<typeof setEditModeAC>
export const setEditModeAC = (isEdit: boolean) =>
    ({type: "SET-EDIT-MODE", payload: {isEdit}} as const)

type SetConfettiType = ReturnType<typeof setConfettiAC>
export const setConfettiAC = (isConfetti: boolean) =>
    ({type: "SET-CONFETTI", payload: {isConfetti}} as const)


/*export const removeTaskTC = (todoListId: string, taskId: string): AppThunk => dispatch => {

    tasksApi.deleteTask(todoListId, taskId)
        .then(res => {
            if (res.data.resultCode === 0) dispatch(removeTaskAC(todoListId, taskId))
        })
}*/
