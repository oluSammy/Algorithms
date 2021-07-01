function counting (s) {
  const find01 = str => {
    const strArr = [...str];
    let count = 0;
  
    let check = [strArr[0]];
  
    for (i = 1; i< strArr.length; i++) {
      check.push(strArr[i]);
      if (check.join('') === '01') {
        count++;
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
        count++;
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
        count++;
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
        count++;
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
        count++;
      }
      if (check.length === 5) {
        check.shift()
      }
    }
  
   return count;
  }

return find01(s) + find10(s) + find0011(s) + find1100(s) + find10001(s)
}

console.log(counting('00110'));