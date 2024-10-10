//fundamental of javascripts
//arrays  and objects
//function return
//async js coding
//froeach ,map,filter find indexof

var arr = [2, 3, 4,];
arr.forEach(function (val) {     //forEach ...val=array elements in function
  console.log(val + " Hello Minhaz");
})

//js map creates a new array
var newArr = arr.map(function (val) {
  return 10 * val
})
console.log(newArr);

//js filter 
var filterarr = newArr.filter(function (val) {
  if (val >= 30) {
    return true;
  }
  else
    return false;

})
console.log(filterarr);

//js index of finds specifi a value is present in an array or not
var index = arr.indexOf(3);
console.log(index);
//if result is 1 then this means the value is present and if -1 thne it means this valus is not present