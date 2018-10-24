import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import actionTypes from './actionTypes'
import charactersReducer from './reducer/characters'

const initialState = {
  test: true
}

// REDUCERS
const reducers = combineReducers({
  charactersReducer
})

/** initializeStore */
export function initializeStore (initialState = initialState) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
