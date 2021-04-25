const toCapCase = (str) => {
  if (str === '') return str;

  const strArray = str.split(' ');

  const newStrArray = strArray.map((el) => {
    let elementString = el.toString();
    let elementArray = [...elementString];
    elementArray;
    let upperCase = elementArray[0];
    let upperLetter = upperCase.toUpperCase();
    elementArray.shift();
    // const newElArray = elementArray.map(el => el.toLowerCase())
    elementArray.unshift(upperLetter);
    return elementArray.join('');
  });
  return newStrArray.join(' ');
};

console.log(toCapCase('abt cC'));

let test = 'test';

console.log(test.split(''));
