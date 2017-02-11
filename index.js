function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

var animals = ["dog", "fish", "cat"]

doToElementsInArray(animals, changeCompletely)

console.log(animals)





/*
element - what it is
index - where it is
array - array as a whole
*/
