function longestSubstringWithoutDuplication(string) {
  const strArr = Array.from(string);

  let wordArr = [strArr[0]];

  const longWordsArr = [];
  
  if (string.length === 1) return string

  for (i = 1; i < strArr.length; i++) {
    if (!wordArr.includes(strArr[i])) {
      wordArr.push(strArr[i])
      // wordArr
      
      if ( i + 1 === string.length) {
        longWordsArr.push(wordArr.join(''))
      }
    } else {
      const idx = wordArr.findIndex(el => el === strArr[i]);
      longWordsArr.push(wordArr.join(''))
      // longWordsArr
      const long =  wordArr.splice(0, idx + 1);
      // wordArr
      wordArr = [...wordArr, strArr[i]]

      // long
      // wordArr.push(strArr[i])
    }
  }
  

  const newq= [...longWordsArr]
  const first = newq.slice(0, 1).shift();


  console.log(first, '******');
  console.log(string)
  
  let longest = first
  longWordsArr.forEach(el => {
//     const firs
    if ([...el].length > [...longest].length) {
      longest = el
    } else {
      longest = longest
    }
  })
  



  return longest;
}

exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;