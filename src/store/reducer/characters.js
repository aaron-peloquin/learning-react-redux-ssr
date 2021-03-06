import load from './../../helpers/localStorageLoad'
import save from './../../helpers/localStorageSave'
import generateHash from './../../helpers/generateHash'
import lookupCharacterHash from './../../helpers/lookupCharacterHash'
import actionTypes from './../actionTypes'
/**
 * Reducer for the redux key of "characters".
 * Will automatically save to localStorage on every update
 * 
 * An array of objects.
 *  Each object has 2 keys "name" and "sets"
 *    @var {str} name the display name for this character
 *    @var {str} background a paragraph describing the background of this character
 *    @var {str} image a url link to an image hosted elsewhere on the internet
 *    @var {arr} sets an array of objects containing roll sets for this character.
 *    Those object's keys are:
 *      @var {str} label a required label for this set
 *      @var {str} note an optional textarea for 
 *      @var {str} primary an optional dice equation
 *      @var {str} secondary an optional second dice equation
 *    @var {arr} bars an array of objects containing roll sets for this character
 *    Those object's keys are:
 *      @var {str} label the label for this bar (ie: "Health" or "2nd level spell slots")
 *      @var {bool} favorite set to true to give priority
 *      @var {int} max the maximum value for this bar
 *      @var {int} val the current value
 */
const defaultState = new Array()

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
  
  state = state.slice()

  switch (type) {
    default:
      saveToStorage = false
      break
    /** Add new character to the state */
    case actionTypes.addCharacter:
      if(payload) {
        /** Ensure characters always have a name */
        payload.name = payload.name||"New Character"
        let hash = generateHash()
        while(lookupCharacterHash(hash, state)>=0){
          hash = generateHash()
        }
        payload.hash = hash
        /** If this character has any data, add them into the state */
        state.push(payload)
      }
      break
    /** Update a character's name, background, and image based off it's id */
    case actionTypes.editCharacter:
      if(payload.id>=0 && typeof state[payload.id] !== 'undefined') {
        state[payload.id].name = payload.data.name||"Unnamed Character"
        state[payload.id].background = payload.data.background||""
        state[payload.id].image = payload.data.image||""
      }
      else {
        saveToStorage = false
        console.warn(`[Redux] invalid payload.id on ${actionTypes.editCharacter}`)
      }

      break;
  }


  if(saveToStorage) {
    save('characters', state)
  }

  return state
}

export default charactersReducer
