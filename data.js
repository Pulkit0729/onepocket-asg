function maniupulate(arr) {
  return arr.reduce((a, b) => {
    return a + b;
  }, 0);
}

console.log(`Sum `, maniupulate([1, 22, 3, 34]));
