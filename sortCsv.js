function sortCsvColumns(csv_data) {
  const header = csv_data.split('\n')[0];
  const headerArray = header.split(',');
  const sortedHeader = header.split(',').sort((a, b) => {
    return a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0);
  });

  const newArray = csv_data.split('\n');
  newArray.splice(0, 1);
  // newArray

  // headerArray
  const sortedObj = headerArray.map((name, idx) => {
    const newIndex = sortedHeader.findIndex((el) => name === el);
    return {
      oldIndex: idx,
      newIndex,
    };
  });

  const sortedTable = newArray.map((str) => {
    const splitedArr = str.split(',');
    const brandNewArr = [];
    splitedArr.map((el, idx) => {
      el;
      brandNewArr[sortedObj[idx].newIndex] = el;
      // idx
      // sortedObj[idx].newIndex
    });
    return brandNewArr;
  });

  const textArr = sortedTable.map((txt) => txt.join(','));
  const newTxt = textArr.join('\n');
  newTxt;
  const joinedArr = sortedHeader.join(',');

  const allStr = `${joinedArr}\n${newTxt}`;
  // allStr

  return allStr;
}

console.log(
  sortCsvColumns(
    'Beth,Charles,Danielle,Adam,Eric\n17945,10091,10088,3907,10132\n2,12,13,48,11'
  )
);
