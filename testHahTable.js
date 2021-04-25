const hashFunction = (str, tableSize) => {
  let hash = 17;

  for (let i = 0; i < str.length; i++) {
    hash = (13 * hash * str.charCodeAt(i)) % tableSize;
  }
  // hash =
  return hash;
};

class HashTable {
  table = Array(3);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashFunction(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = (key, value) => {
    const idx = hashFunction(key, this.table.length);
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      //resize
      this.resize();
    }
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  getItem = (key) => {
    const idx = hashFunction(key, this.table.length);
    if (!this.table[idx]) return null;
    console.log(this.table[idx]);
    return this.table[idx].find((item) => item[0] === key)[1];
  };
}

const hashTable = new HashTable();

hashTable.setItem('firstName', 'samuel');
hashTable.setItem('lastName', 'Olu');
hashTable.setItem('age', '12');
hashTable.setItem('ages', '12');
hashTable.setItem('assge', '12');
console.log(hashTable.table.length);
console.log(hashTable.table.length);
console.log(hashTable.table);
console.log(hashTable.getItem('firstName'));
console.log(hashTable.getItem('lastName'));
console.log(hashTable.getItem('age'));
