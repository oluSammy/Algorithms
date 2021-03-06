const countAndSay = (n) => {
  let result = '1';

  while (n > 1) {
    let next = '';
    let count = 1;
    let current = result[0];

    for (let i = 1; i < result.length + 1; i++) {
      if (result[i] !== current) {
        next += `${count}${current}`;
        current = result[i];
        count = 1;
      } else {
        count += 1;
      }
    }
    result = next;
    n--;
  }
  return result;
};

console.log(countAndSay(5));
