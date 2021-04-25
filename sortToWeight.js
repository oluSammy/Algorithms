const calcWeight = (number) => {
  const arrNo = number.toString().split('');
  const total = arrNo.reduce((acc, val) => {
    return acc + Number(val);
  }, 0);
  return total;
};

const sortArray = (arr) => {
  const newArray = arr.map((el, i) =>{
    return {index: i, sum: calcWeight(el)};
  });
  console.log(arr);
  // console.log(newArray);
  // console.log(newArray.sort((a, b) => a -b));
  return newArray
};

console.log(sortArray([2, 1, 100, 56, 78, 3, 66, 99, 200, 46]));


const sort = (arr) => {
  let sorted = false;
  while (!sorted) {
      sorted = true;
      for (i = 0; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
          sorted = false;
          let temp = arr[i - 1];
          arr[i - 1] = arr[i]
          arr[i] = temp;
      }
      }
  }
  return arr;
}
console.log(sort([2, 1, 100, 56, 78, 3, 66, 99, 200, 46]));



// const convertWeight = (num) => {
//   if(`${num}`.split('').length === 1) return num
//   return `${num}`.split('').reduce((a, b) => Number(a) + Number(b))
// }
// const arr = [2, 1, 100, 50, 23, 56, 78, 3, 66, 99, 200, 46];
// const compareArr = [...arr]
// const newArr = arr.map((n) => convertWeight(n))

// arr.sort((a, b) => newArr[arr.indexOf(a)] - newArr[arr.indexOf(b)])
// console.log(arr)
// console.log(newArr)
// for(let i = 0; i < arr.length; i += 1) {
//   let firstIndex = i
//   let secondIndex = i + 1 || null
//   if (convertWeight(arr[firstIndex]) === convertWeight(arr[secondIndex])){
//       if (arr[firstIndex] > arr[secondIndex]) {
//           let temp = arr[firstIndex]
//           arr[firstIndex] = arr[secondIndex]
//           arr[secondIndex] = temp
//       }
//   }
// }