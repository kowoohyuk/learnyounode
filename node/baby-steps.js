const array = process.argv.slice(2);
console.log(array.reduce((acc, cur) => acc + Number(cur), 0));