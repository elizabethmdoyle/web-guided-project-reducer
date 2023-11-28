import { SET_TITLE, SET_NEW_TITLE_TEXT, TOGGLE_EDITING } from "../actions/title.actions"

export const initialState = {
   newTitleText: '',
    editing: false, 
    title: "Hello earthlings!"

}
//reducer takes in the initial state, and some sort of action
export const reducer = (state, action) => {
    switch(action.type) {
        case(SET_TITLE):
            return ({...state, title: action.payload, newTitleText: "", editing: false})
        case(TOGGLE_EDITING):
            return ({...state,  editing: !state.editing})
        case(SET_NEW_TITLE_TEXT):
            return ({...state,  newTitleText: action.payload})
            default:
            return(state)
        }
    
}