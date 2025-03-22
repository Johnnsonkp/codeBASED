export const isEmptyObj = (obj) => {
  return Object.keys(obj).length === 0;
}
export function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

export function shuffleObjOfArrays(obj){
  let new_obj = []

  obj.map((arr, index) => {
    for(let i = 0; i < arr.length; i++){
      const j = Math.floor(Math.random() * (i + 1));

      if(arr[i].subcategory == arr[j].subcategory){
        new_obj.push(arr[i] = arr[j])
      }
    }
  })
  console.log(new_obj)
  // return(new_obj)
}