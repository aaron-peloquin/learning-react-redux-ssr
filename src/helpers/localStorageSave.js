/**
 * Save an object to localStorage as a JSON string
 * @param {str} key The unique key you want to over/write to in localStorage (prefixed with "ttdr-")
 * @param {obj} state The object you want to save to this key
 */
const localStorageSave = (key,obj) => {
  try{
    const saveObj = JSON.stringify(obj)
    localStorage.setItem('ttdr-'+key, saveObj)
  }
  catch(e){
    console.warn("localStorage is diabled, cannot save")
  }
}

export default localStorageSave