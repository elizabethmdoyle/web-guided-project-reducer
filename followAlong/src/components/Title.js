import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/title.reducer';
import { setNewTextTitle } from '../actions/title.actions';


const Title = () => {
 // {newTitleText: '', editing: false, title: "Hello earthlings!"}
  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);
  // const [newTitleText, setNewTitleText] = useState('');
//state is moved into the reducer.js file and managed with the reducer function below


  const [state, dispatch] = useReducer(reducer(initialState))

  // const handleChanges = e => {
  //   setNewTitleText(e.target.value);
  // };

  // const handleEditing = () => {
  //   setEditing(!editing);
  // }

  // const handleFormSubmit = () => {
  //   setTitle(newTitleText);
  //   setEditing(false);
  //   setNewTitleText('');
  // }

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={() => dispatch(toggleEditing())} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={(evt) => dispatch(setNewTextTitle(evt.target.value))}
          />
          <button
            onClick={() => dispatch(setTitle(state.newTitleText))}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;