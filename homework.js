// Các phép so sánh
// Câu 1
var a = '5000';
var b = '200';

// console.log(a > b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 1000 trông có vẻ lớn hơn 200. 
// vì so sanh 2 string nên sẽ xét từn phần tử trong string vì 2>1 beeb trả về false
// Viết câu trả lời ở dưới đây.
// Câu 2
// var a = [1, 2];
// var b = [1, 2];
// console.log(a === b);
// console.log(JSON.stringify(a)==JSON.stringify(b)); trả về true
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị
// Vì đây là chúng ta đang so sánh 2 mảng mà giá trị biến mỗi mảng k thể gọi như trên nên kết quả là false
// của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.

// Câu 3
// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */
//  var a = [1, 2, 3];
//  var b = [10, 20];
//  var gt = 0;
// for(var i =0;i<a.length;i++){
//   for(var j=0;j<b.length;j++){
//     gt = gt+a[i]*b[j];
//   }
// }
// console.log(gt);

//  Câu 4: viết 1 hàm tính giai thừa ví dụ 5 = 4 * 3 * 2 * 1 = 120
function tinhgt(a) {
  var gt = 1;
  if (a == 0 || a == 1) {
    return gt;
  } else {
    for (var i = 2; i <= a; i++) {
      gt *= i;
    }
    return gt;
  }
}
// console.log(tinhgt(10));

// * viết 1 hàm sum tính tổng cách số trong mảng
function sum(arr) {
  var result = 0;
  for (var cal of arr) {
    result += cal;
  }
  return result;
}
// console.log(sum([5,2,5,8,9]));
// sum[5,2,5,8,9] //log 29
// sum([234, 234, 1212, 11, 99]) 1790

/**
 * viết 1 hàm isPrimeNumber có tham số x
 * Dùng vòng lặp for kiểm tra số nguyên tố.
 * Trả về true nếu là số nguyên tố, ngược lại là false.
 * nếu x < 2 thì không phải số nguyên tố.
 */
function isPrimeNumber(x){
  if(x<2){
    return false;
  }
  for(var i =2;i<(x-1);i++){
    if(x%i ==0){
      return false;
    }
    return true;
  }
}
// console.log(isPrimeNumber(997));
// array method 
// câu 1 : 
/* Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array */
// var arr =  [1,4,5,7,9,13,23];

// Câu 2
/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */
// Câu 3
/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
 * ví dụ : first([1, 2, 3], 2)) 2 là số phần tử
 * 
*/

function first(arr, n) {
  // your code here...
  for (var i = 0; i < n; i++) {
    console.log(arr[i]);
  }
}
// console.log(first([1, 2, 3], 2))
//   console.log(first([1, 2, 3], 2)); // expect [1, 2]
// Câu 4: https://drive.google.com/drive/u/1/folders/1fJw7cCy2Ezi38MgEn4LOv_FNBKG9bGbk
var array = [1,5,7,8,9,15];
// var newArr = array.filter(function(item){
//   return item%2 ==0;
//   return item%2 ==1;
//   return item>=5;
//   return item%5 ==0;
// })
// console.log(newArr)
// var newArr1 = array.map(function(item){
//   if(item > 5) {
//     return item +1;
//   }else{
//     return item;
//   }
// });
// console.log(newArr1);
// 1.6
// var newArr2 = array.slice(3,array.length)
// console.log(newArr2)
// 1.7 
// array.slice(2,1);
// 1.8
// array.push(5)
// console.log(array);
// nhân đôi giá trị cảu từng phần tử
// var newArr4 = array.map(function(item){
//   return item*2;
// })
// console.log(newArr4);
// var array2 =[];
// for(var i=0;i<array.length;i++){
//     var item = array[i];
//     array2.push(item*2);
// }
// console.log(array2);
// bài 2:
// var arrt = [1,8,5,2,7,6,9,2,6];
// c1
// var sxtangdan = arrt.sort(function(a,b){return a-b}); 
// c2
// var sxtangdan = arrt.sort(function(item1,item2){
//   if(item1 > item2){
//       return 1
//   }
//   if(item1 < item2){
//       return -1
//   }
//   if(item1 = item2){
//       return 0
//   }
// })
// console.log(sxtangdan);
// bai3
var persons =
  [{
  name: "Trung",
  class: "Nodemy01",
  dateJoin: "05 - 02 - 2020",
  age: 20
  },
  {
  name: "Phong",
  class: "Nodemy01",
  dateJoin: "06 - 01 - 2020",
  age: 19
  },
  {
  name: "Nam",
  class: "Nodemy02",
  dateJoin: "25 - 01 - 2020",
  age: 20
}];
// var tuoiTangDan = persons.sort(function(item1,item2){
//  return item1.age - item2.age;})
// console.log(tuoiTangDan);

function coverdateString(dateString){
  // date lúc đầu : 25-01-2020 ta cần chuyển về dạng 2020-01-25
    var arrDate = dateString.split('-');   
     // từ 25-01-2020 thành [25,01,2020]
    var date = arrDate[2] + arrDate[1] +  arrDate[0];
    // đảo vị trí [25,01,2020] thành [2020,01,25] 
    return new Date(date) // chuyển từng phần tử sang object date 
    // do khi ở object date thì ta có thể dùng thuộc tính object là sử dụng dấy >,<   
}
//   var sorted = persons.sort(function(item1,item2){
//   var date1 = coverdateString(item1.dateJoin)
//   var date2 = coverdateString(item2.dateJoin)
//   if(date1 > date2){
//       return 1
//   }
//   if(date1 < date2){
//       return -1
//   }
//   if(date1 = date2){
//       return 0
//   }
// });
// console.log(sorted);
// var newArc = persons.filter(function(item){
//     var date = coverdateString(item.dateJoin);    
//     return date.getMonth()<1;
//     //  vì getMonth() bắt đầu từ 0-11 tức là tháng 1 sẽ hiện là 0 
// });
//   console.log(newArc);
  // var newArrt = persons.map(function(item){
  //   item.name = item.name.toUpperCase();
  //   return item;
  // });
  // console.log(newArrt)
// for(const{dateJoin} of persons){
//   console.log(dateJoin)
// }
// for(const item in persons){
//   console.log(persons[item])
// }
var doan = {
  name: 'Doan',
   age: 22,
   salary: 1000
};
var trung = {...doan};
// ...doan ở đâu là dùng để sao chép tất cả các thuộc tính của đoàn vào trung.
trung.clone = true;
trung.name = 'trung';
// console.log(trung)
var greeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy';
// console.log(greeting.length)
// var ketqua = greeting.indexOf('Nodemy')
// c2:
// var ketqua = greeting.search('Nodemy')
// var ketqua1 = greeting.startsWith('Welcome')
// console.log(ketqua1)
// var ketqua2 = greeting.substring(greeting.length-7,greeting.length);
// console.log(ketqua2)
// var ketqua3 = greeting.split(' ')
// console.log(ketqua3)
// var ketqua4 = greeting.trim()
// console.log(ketqua4)
// var ketqua5 = greeting.includes('Nodemy')
// console.log(ketqua5)
// var ketqua6 = greeting.replace(/Nodemy/g, 'NODEMY')
// console.log(ketqua6)
// var get = greeting.toLocaleUpperCase();
// console.log(get)
// var ketqua7 = greeting.charAt(4)
// console.log(ketqua7)