{/*common uses of file system module
1.read files
2.create files/write files
3.updtae files
4.rename files
5.append files
6.rename files
  */}
//write file syntax --(filename.data,callback func(err))
const fs = require('node:fs');
fs.writeFile('myFile.txt', 'my name is Minhaz', (err) => {
  if (err) throw err;
  console.log('File created');
})

fs.writeFile('myIndex.html', 'my name is Minhaz', (err) => {
  if (err) throw err;
  console.log('File created');
})
//append file means 
fs.appendFile('myFile.txt', 'i am an Eng student', (err) => {
  if (err) throw err;
  console.log('File appended');

})

//delete file
fs.unlink('myIndex.html', (err) => {
  if (err) throw err;
  console.log('File deleted');
})