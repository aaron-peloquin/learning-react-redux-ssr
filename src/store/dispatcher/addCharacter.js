import actionTypes from './../actionTypes'

const addCharacter = (dispatch, characterName) => {
  const data = {
    type: actionTypes.addCharacter,
    payload: { name: characterName }
  }
  return dispatch(data)
}

export default addCharacter
