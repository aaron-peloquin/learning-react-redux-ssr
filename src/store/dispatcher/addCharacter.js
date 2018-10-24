import actionTypes from './../actionTypes'
import store from './../store'

const addCharacter = () => {
  console.log("Requesting new character")
  return dispatch({ type: actionTypes.addCharacter })
}

export default addCharacter
