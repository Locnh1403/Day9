// Bài 1
// Sử dụng 1 toán tử dấu ?
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
// }
// console.log(checkAge(15));

// Sử dụng OR ||
// function checkAge(age) {
//     return (age > 18) && true || confirm('Did parents allow you?');
// }
// console.log(checkAge(18));

//Bài 2
// var array = [5, 3];
// var min = array.reduce(function(a,b) {
//     return (a < b) ? a : b;
// });
//  console.log(min);

// Bài 3
// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// }
// ask('Do you agree?',
//     yes = () => { alert('You agreed.'); },
//     no = () => { alert('You canceled the execution.'); });

// Array
// a. Tìm các số chia hết cho 2
// let array = [9, 100, 2, 50, 4, 100, 22, 30]
// let newArray = array.filter(num => num % 2 == 0);
// console.log(newArray);

// b. Tìm các số lớn hơn 7
// let array = [9, 100, 2, 50, 4, 100, 22, 30]
// let newArray = array.filter(num => num > 7);
// console.log(newArray);

// c. Tìm các số nhỏ hơn 5
// let array = [9, 100, 2, 50, 4, 100, 22, 30]
// let newArray = array.filter(num => num < 5);
// console.log(newArray);

// d. Tìm các số nhỏ hơn 50 và nhân đôi các số đó lên
// let array = [9, 100, 2, 50, 4, 100, 22, 30]
// let newArray = array.filter(num => num < 50);
// let newArray1 = newArray.map(num => num * 2);
// console.log(newArray1);