const find01 = str => {
  const strArr = [...str];
  let count = 0;

  let check = [strArr[0]];

  for (i = 1; i< strArr.length; i++) {
    check.push(strArr[i]);
    if (check.join('') === '01') {
      if (numberOfZeros(check.join(''))) {
        count++;
      }
    }
    console.log(check.join('') === '01')
    console.log(check.join(''));
    if (check.length === 2) {
      check.shift()
    }
  }

 return count;
}

const find10 = str => {
  const strArr = [...str];
  let count = 0;

  let check = [strArr[0]];

  for (i = 1; i< strArr.length; i++) {
    check.push(strArr[i]);
    if (check.join('') === '10') {
      if (numberOfZeros(check.join(''))) {
        count++;
      }
    }
    if (check.length === 2) {
      check.shift()
    }
  }

 return count;
}

const find0011 = str => {
  const strArr = [...str];
  let count = 0;

  let check = [strArr[0]];

  for (i = 1; i< strArr.length; i++) {
    check.push(strArr[i]);
    if (check.join('') === '0011') {
      if (numberOfZeros(check.join(''))) {
        count++;
      }
    }
    if (check.length === 4) {
      check.shift()
    }
  }

 return count;
}

const find1100 = str => {
  const strArr = [...str];
  let count = 0;

  let check = [strArr[0]];

  for (i = 1; i< strArr.length; i++) {
    check.push(strArr[i]);
    if (check.join('') === '1100') {
      if (numberOfZeros(check.join(''))) {
        count++;
      }
    }
    if (check.length === 4) {
      check.shift()
    }
  }

 return count;
}

const find10001 = str => {
  const strArr = [...str];
  let count = 0;

  let check = [strArr[0]];

  for (i = 1; i< strArr.length; i++) {
    check.push(strArr[i]);
    if (check.join('') === '10001') {
      if (numberOfZeros(check.join(''))) {
        count++;
      }
    }
    if (check.length === 5) {
      check.shift()
    }
  }

 return count;
}

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

// console.log(numberOfZeros('11000011'));
// console.log(find01('10001'));
// console.log(find10('10101'));
// console.log(find0011('00110011'));
// console.log(find1100('00110011'));
// console.log(find10001('10001'));

console.log(find01('10101') + find10('10101') + find0011('10101') + find1100('10101') + find10001('10101'));