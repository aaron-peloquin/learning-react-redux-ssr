/**
 * Generates a random hash that is 8 characters long and always starts with 'h'
 * @param {int} length the length of the hash you want to generate
 */
const generateHash = () => {
  return 'h'+Math.random().toString(36).substr(3, 7);
}

export default generateHash