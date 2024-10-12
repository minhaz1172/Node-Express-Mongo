{/*common uses of file system module
1.read files
2.create files/write files
3.update files/append
4.rename files
5.append files
6.rename files
7.copy file
8.file open
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

//read file redas data from the file
fs.readFile('myFile.txt', 'utf8', (err, data) =>
//utf8 for The encoding format. This ensures the file is read as a string, not raw binary data.
{
  if (err) throw err;

  console.log("File saved", data);

});

//open file
fs.open('myFile.txt', 'w', (err, file) => {
  if (err) throw err;
  console.log('file opened successfully', file);
})

//copy file--src,destination,callback
fs.copyFile('myFile.txt', 'copy.txt', (err) => {

  if (err) throw err;
  console.log('file copied to copy.txt');
})