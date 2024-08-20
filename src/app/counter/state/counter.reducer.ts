import { Action, createReducer, on } from "@ngrx/store"
import { initialState } from "./counter.state"
import { decreament, increament, reset } from "./counter.action"


const _counterReducer = createReducer(initialState, // first get initial state
    on(increament, (state) => { // add action name
    return {
        ...state,  // copy current state
        counter: state.counter + 1 // change the state with current state
    }
}),
    on(decreament, (state) => { // add action name
        return {
            ...state, // copy current state
            counter: state.counter - 1 // change the state with current state
        }
    }),
    on(reset, (state) => { // add action name
        return {
            ...state, // copy current state
            counter: 0 // change the state with current state
        }
    })
)

export function counterReducer(state: { counter: number } | undefined, action: Action) {  
    return _counterReducer(state, action);
}