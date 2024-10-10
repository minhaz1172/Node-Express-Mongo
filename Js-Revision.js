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

const changeText = function () {
  document.querySelector('h1').innerHTML = "Text Changed"
}
setTimeout(changeText, 3000);
//we can use cleaTimeOut to stop setTimeout Function

//now setInverVal how work ,,we will change background color of body by set interval


//firsty generate a random color

const randomColor = () => {
  const hex = '01023456ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(randomColor);

let intervalId;
const startchangecolor = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {

      document.body.style.backgroundColor = randomColor();
    }, 2000); //change color every second
  }
};

const stopchangecolor = () => {
  clearInterval(intervalId); //stop change color when button clicked
  intervalId = null;
};
const reset = () => {
  clearInterval(intervalId);
  intervalId = null;
  document.body.style.backgroundColor = "#FFFFFF";
}


document.querySelector('#start').addEventListener('click', startchangecolor);
document.querySelector('#stop').addEventListener('click', stopchangecolor);
document.querySelector('#reset').addEventListener('click', reset);
