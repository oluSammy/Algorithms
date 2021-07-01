function dnaComplement(dna) {
  if (!dna) return dna;

  let dnaArray = [...dna];

  const newDna = dnaArray.map((letter) => {
    if (letter === 'A') {
      return 'T';
    } else if (letter === 'T') {
      return 'A';
    } else if (letter === 'C') {
      return 'G';
    } else if (letter === 'G') {
      return 'C';
    }
  });
  return newDna.join('');
}

console.log(dnaComplement('ATTGC'));
