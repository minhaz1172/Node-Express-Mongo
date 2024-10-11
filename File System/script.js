{/*common uses of file system module
1.read files
2.create files/write files
3.updtae files
4.rename files
5.
  */}
//write file
const fs = require('node:fs');
fs.writeFile('myFile.txt', 'my name is Minhaz', (err) => {
  if (err) throw err;
  console.log('File created');
})

fs.writeFile('myIndex.html', 'my name is Minhaz', (err) => {
  if (err) throw err;
  console.log('File created');
})