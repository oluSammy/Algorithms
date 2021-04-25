const isIsogram = (str) => {
  const strArr = [...str];
  const occurence = [strArr[0]];

  for (let index = 1; index < strArr.length; index++) {
    if (occurence.includes(strArr[index])) {
      return false;
    } else {
      occurence.push(strArr[index])
    }
  }
  return true;
};

console.log(isIsogram('Geek'));
