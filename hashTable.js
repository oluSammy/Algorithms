function hashFunction(str, tableSize) {
  let hash = 17;

  for (let i = 0; i < str.length; i++) {
    hash =(13 * hash * str.charCodeAt(i)) % tableSize
  }

  return hash
}

console.log('sam'.charCodeAt());

class HashTable {

  table = new Array(3);

  setItem = (key, value) => {
    const idx = hashFunction(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = ([key, value])
    }
    // this.table[idx] = value
  };
  getItem = (key) => {
    const idx = hashFunction(key, this.table.length);
    return this.table[idx];
  };
}

const myTable = new HashTable();
myTable.setItem('firstName', 'Sam');
myTable.setItem('LastName', 'Olu');

console.log(myTable.table);
console.log(myTable.getItem('firstName'));
