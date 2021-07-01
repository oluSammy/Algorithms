function findString (str, stringBinary, length) {
  const strArr = [...str];
  let count = 0;

  let check = [strArr[0]];

  for (i = 1; i< strArr.length; i++) {
    check.push(strArr[i]);
    if (check.join('') === stringBinary) {
      if (getNumberOfZeros(check.join(''))) {
        count++;
      }
    }
    console.log(check.join('') === stringBinary)
    console.log(check.join(''));
    if (check.length === length) {
      check.shift()
    }
  }

 return count;
}

function getNumberOfZeros (string) {
  let zeros, ones = 0;
  const newString = Array.from(string);

  newString.forEach(item =>{
    item == 0 ? zeros++ : ones++;
  })

  if (zeros === ones) {
    return true
  } else {
    return false
  }

}

console.log(findString('00110') + findString('00110') + findString('00110') + findString('00110') + findString('00110'));
// const find01 = str => {
//   const strArr = [...str];
//   let count = 0;

//   let check = [strArr[0]];

//   for (i = 1; i< strArr.length; i++) {
//     check.push(strArr[i]);
//     if (check.join('') === '01') {
//       if (numberOfZeros(check.join(''))) {
//         count++;
//       }
//     }
//     console.log(check.join('') === '01')
//     console.log(check.join(''));
//     if (check.length === 2) {
//       check.shift()
//     }
//   }

//  return count;
// }

// const find10 = str => {
//   const strArr = [...str];
//   let count = 0;

//   let check = [strArr[0]];

//   for (i = 1; i< strArr.length; i++) {
//     check.push(strArr[i]);
//     if (check.join('') === '10') {
//       if (numberOfZeros(check.join(''))) {
//         count++;
//       }
//     }
//     if (check.length === 2) {
//       check.shift()
//     }
//   }

//  return count;
// }

// const find0011 = str => {
//   const strArr = [...str];
//   let count = 0;

//   let check = [strArr[0]];

//   for (i = 1; i< strArr.length; i++) {
//     check.push(strArr[i]);
//     if (check.join('') === '0011') {
//       if (numberOfZeros(check.join(''))) {
//         count++;
//       }
//     }
//     if (check.length === 4) {
//       check.shift()
//     }
//   }

//  return count;
// }

// const find1100 = str => {
//   const strArr = [...str];
//   let count = 0;

//   let check = [strArr[0]];

//   for (i = 1; i< strArr.length; i++) {
//     check.push(strArr[i]);
//     if (check.join('') === '1100') {
//       if (numberOfZeros(check.join(''))) {
//         count++;
//       }
//     }
//     if (check.length === 4) {
//       check.shift()
//     }
//   }

//  return count;
// }

// const find10001 = str => {
//   const strArr = [...str];
//   let count = 0;

//   let check = [strArr[0]];

//   for (i = 1; i< strArr.length; i++) {
//     check.push(strArr[i]);
//     if (check.join('') === '10001') {
//       if (numberOfZeros(check.join(''))) {
//         count++;
//       }
//     }
//     if (check.length === 5) {
//       check.shift()
//     }
//   }

//  return count;
// }

const numberOfZeros = strs => {
  const strsArr = [...strs];

  console.log(strsArr);

  let count0 = 0;
  let count1 = 0;

  strsArr.forEach(el =>{
    if (el == 0) {
      console.log(el)
      count0++
    } else count1++
  })

  return count1 === count0
}