
function map(arr, callback) {
  const mapped = [];
  for(let i = 0; i < arr.length; i++) {
    mapped[i] = callback(arr[i]);
  }
  return mapped;
}

function filterArray(arr, callback) {
  const filtered = [];
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i])) 
      filtered.push(arr[i]);
  }
  return filtered;
}

module.exports = {
  map,
  filterArray
};
