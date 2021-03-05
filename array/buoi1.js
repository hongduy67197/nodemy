/*
string: dùng để viết tên người hoặc văn bản
Number: Khai báo cơ sở bình thường
Boonlean: true fales
Null là để đại diện giá trị không tồn tại
function: 
object
Underfined có nghĩa là không xác định
array []
NaN: not a number
*/
/*
var là cú pháp 
name là tên biến
= là gán giá trị
đằng sau nó là 1 kiểu dữ liệu
*/
// var name = 'duy';
// console.log(name);
// var abc;
// var number = 2;
// var number1 = 3;
// var ketqua = number + number1;
// console.log(ketqua);

var fullName = 'Ai do';
var age = 30;
var isMale = true;
// console.log(fullName,age,isMale);
// khai bao object
var aido = {
    name: 'nguoi xa la',
    age: 30,
    phone: 123,
    isMale: true
}
// console.log(aido);
// cach 1 
// console.log(aido.name);
// cach 2
// console.log(aido['name']);
//  them truong voi them du lieu
aido.test = 'demo';
var persion = {
    name: '1',
    age: 28,
    gender: 'male',
}
persion.name = 'Nam';// thay thế tên từ 1 thành nam
persion.salary = 999;
// console.log(persion);
// Array 
var arr = [1, 2, 3, 4, 5, 6, 7];
//  mảng chỉ nên dùng 1 kiểu dữ liệu
// bắt đầu từ 0 đến hết dãy 
// console.log(arr);
/*  Array
Bài 1
 * Tạo danh sách lớp của mình;
Bài 2
/* Khai báo một array "listAnimal" chứa các object mô tả danh sách các con vật.
Mỗi con vật có 2 thuộc tính: name và age trong đó name có kiểu string, age có kiểu number.
 * {name}: string;
 * {age}: number;
*/
var hocsinh1 = {
    name : 'hocsinha' ,
    age : 5
}
var hocsinh2 = {
    name : 'hocsinhb',
    age : 5
}
var hocsinh3 = {
    name : 'hocsinhbc',
    age : 5
}
// var danhsachhs = {hocsinh1,hocsinh2,hocsinh3};
// console.log(danhsachhs);
// var so1 = 4;
// var so2 = 5;
// so1 += so2;
// so1 -= so2;
// so1 *= so2;
// so1 /= so2;
/*
 * Lớn hơn : >
 * Nhỏ hơn : <
 * Nhỏ hơn hoặc bằng: <=
 * Lớn hơn hoặc bằng: >=
 * Khác: !=
 * Gía trị phủ định: !
 * Phép bằng: ==;===
 * Phép bằng ==: so sánh giá trị
 * Phép bằng ===; so sánh giá trị và kiểu giá trị;
 * Phép hoặc: ||
 * Phép và : &&
 * Phép chia lấy dư: %
 * Bằng chính xác (===)	Trả về true nếu các toán hạng bằng nhau và cùng kiểu. Xem thêm tại Object.is và sameness in JS.	3 === var1
Không bằng chính xác (!==)	Trả về true nếu các toán hạng không bằng nhau, hoặc khác kiểu.	var1 !== "3"
3 !== '3'
giá trị && luôn tìm kiếm kết quả false
*/
// function cach 1
// var number = 2;
// var number1 = 10;
// function tong(){
//     return number + number1;
// }
// function hieu(){
//     return number - number1;
// }
// function tich(){
//     return number * number1;
// }
// function thuong(){
//     return number / number1;
// }
// console.log(tong(),hieu(),tich(),thuong());
// cach2
// function sum(a,b){
//     console.log(a + b);
//     console.log(a - b);
//     console.log(a * b);
//     console.log(a / b);
// }
// console.log(sum(2,10));
// var number1 = 10;
// var number2 = 20;
// if(number1 + number2 <= 20){
//     console.log('tong nho hon 20');
// }else{
//     console.log('tong lon hon 20');
// }

// for(var i =0; i<=100; i++){
//     if(i%2==1){
//         console.log(i);
//     }
// }

// function dientich(bankinh){
//     console.log(bankinh*bankinh*3.14);
// }
// console.log(dientich(3));
// btvn1
var array = [1,5,7,8,9,15,18];
var tong =0;
for(var x = 0; x <= array.length; x++){
    // if(array[x]%2==0){
    //     console.log(array[x]);
    // }
    // if(array[x] %2 == 1 ){
    //     console.log(array[x]);
    // }
    // if(array[x] >= 5){
    //     console.log(array[x]);
    // }
    if(array[x] %5 == 0){
        tong = array[x] + tong;
    }
}
console.log(tong);
