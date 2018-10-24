import actionTypes from './../actionTypes'

const addCharacter = (dispatch) => {
  const data = {
    type: actionTypes.addCharacter,
    payload: {name:"Test"}
  }
  return dispatch(data)
}

export default addCharacter
