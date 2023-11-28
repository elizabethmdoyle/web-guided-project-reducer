//import { useReducer } from "react";
//import { initialState, reducer } from "../reducers/title.reducer";
//action types
export const SET_TITLE="SET_TITLE";
export const TOGGLE_EDITING="TOGGLE_EDITING";
export const SET_NEW_TITLE_TEXT="SET_NEW_TITLE_TEXT";

//reducer function
//const {state, dispatch} = useReducer(reducer, initialState)

//action functions - used to distpatch the action types - also called dispatch functions
export const setTitle = (title) => {
    return {type: SET_TITLE, payload: title}
}

export const toggleEditing = () => {
    return {type: TOGGLE_EDITING}
}

export const setNewTextTitle = (newTitleText) => {
    return {type: SET_NEW_TITLE_TEXT, payload: newTitleText}
}