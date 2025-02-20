const myArr = new Array(1,2,3,4,5,"sujal","sujal2")
myArr.shift() // remove first element
myArr.pop() // remove last element

myArr.unshift("sujal4") // add element at first 
myArr.push("sujal3") // add element at last

console.log(myArr)

const newArr = myArr.join("-")// join array element with comma 
console.log(typeof newArr)
console.log(newArr)

console.log("--------------------------------------------------------------");
console.log("example of slice and splice");
//example of slice and splice
const myArr2 = new Array(1,2,3,4,5,6,7,8,9,10)
const myArr3 = myArr2.slice(2,5) // slice will return new array with element from 2 to 5
console.log(myArr3)
console.log(myArr2);

//slice will not change original array
//splice will change original array

//exmaple of splice

console.log("spliced array ="+ myArr2.splice(0,4)) // remove 4 element from index 0 to 4
console.log("orignal array after splice() method ="+myArr2);

