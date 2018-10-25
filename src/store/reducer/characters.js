import load from './../../helpers/localStorageLoad'
import save from './../../helpers/localStorageSave'
import actionTypes from './../actionTypes'
/**
 * Reducer for the redux key of "characters".
 * Will automatically save to localStorage on every update
 * 
 * An array of objects.
 *  Each object has 2 keys "name" and "sets"
 *    @param {str} name the display name for this character
 *    @param {str} background a paragraph describing the background of this character
 *    @param {str} image a url link to an image hosted elsewhere on the internet
 *    @param {arr} sets an array of objects containing roll sets for this character.
 *    Those object's keys are:
 *      @param {str} label a required label for this set
 *      @param {str} note an optional textarea for 
 *      @param {str} primary an optional dice equation
 *      @param {str} secondary an optional second dice equation
 *    @param {arr} bars an array of objects containing roll sets for this character
 *    Those object's keys are:
 *      @param {str} label the label for this bar (ie: "Health" or "2nd level spell slots")
 *      @param {bool} favorite set to true to give priority
 *      @param {int} max the maximum value for this bar
 *      @param {int} val the current value
 */

const defaultState = [
  {name:"Your first character"}
]

/**
 * Update the characters state
 * @param {obj} state the array of character objects
 * @param {str} type a String to identify how we want to update the state
 * @param {obj} payload the data we use to update the state
 * @returns {obj} The new state of characters
 */
const charactersReducer = (state=defaultState, { type, payload }) => {
  let saveToStorage = true
  const charactersStorage = load('characters')

  if(charactersStorage.length>0) {
    state = charactersStorage
  }

  switch (type) {
    default:
      saveToStorage = false
      break
    /** Add new character to the state */
    case actionTypes.addCharacter:
      if(payload) {
        /** Ensure characters always have a name */
        payload.name = payload.name||"New Character"
        /** If this character has any data, add them into the state */
        state = state.slice().push(payload)
      }
      break
    /** Update a character's name, background, and image based off it's id */
    case actionTypes.editCharacter:
      if(payload.id>=0) {
        state = state.slice()

        state[id].name = payload.name||"Unnamed Character"
        state[id].background = payload.background||""
        state[id].image = payload.image||""
      }
      else {
        console.warning(`invalid payload.id on ${actionTypes.editCharacter}`)
      }

      break;
  }

  if(saveToStorage) {
    save('characters', state)
  }

  return state  
}

export default charactersReducer
