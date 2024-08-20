import { createAction } from "@ngrx/store";


export const increament = createAction('increament') // create action name as constant to use in component
export const decreament = createAction('decreament')
export const reset = createAction('reset')