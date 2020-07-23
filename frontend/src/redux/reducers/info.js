import {Record, fromJS} from "immutable";

export const SHOW_ERROR = "SHOW_ERROR";
export const HIDE_ERROR = "HIDE_ERROR";

const initState = Record({
    error: false,
    errorMessage: ""
})

const infoReducer = (state = new initState(), action) => {
    switch (action.type) {
        case SHOW_ERROR:
            return state.merge(fromJS({ ...action.payload }))
        case HIDE_ERROR:
            return state.merge(fromJS({ ...action.payload }))
        default:
            return state
    }
}

export const showErrorMessage = message => {
    return {type: SHOW_ERROR, payload:{error: true, errorMessage: message}}
}

export const hideErrorMessage = () => {
    return {type: HIDE_ERROR, payload:{error: false, errorMessage: ""}}
}

export const getError = store => store.get("info").error
export const getErrorMessage = store => store.get("info").errorMessage
export default infoReducer;