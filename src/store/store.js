import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

/** Reducers */
import charactersReducer from './reducer/characters'

const initialState = {
  test: true
}

/** Reducers */
const reducers = combineReducers({
  characters: charactersReducer
})

/** initialize store */
export function initializeStore (initialState = initialState) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
