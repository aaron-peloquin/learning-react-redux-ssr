import actionTypes from './../actionTypes'

const editCharacter = (dispatch, id=-1, characterData={}) => {
  const payload = {
    id: id,
    data: characterData
  }
  const data = {
    type: actionTypes.editCharacter,
    payload: payload
  }
  return dispatch(data)
}

export default editCharacter
