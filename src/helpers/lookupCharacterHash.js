/**
 * Locate and return a character based on their hash
 * @param {str} hash the hash you want to find
 * @param {obj} state the state of characters
 * @returns {int} of the key that was found, or -1
 */
const lookupCharacterHash = (hash,state) => {
  state.forEach((v,k)=>{
    if(v.hash==hash){
      return k
    }
  })
  return -1
}

export default lookupCharacterHash