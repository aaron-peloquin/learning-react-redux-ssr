
const lookupCharacterHash = (hash,state) => {
  const foundChar = state.forEach((v)=>{
    if(v.hash==hash){
      return v
    }
  })
  return false
}

export default lookupCharacterHash