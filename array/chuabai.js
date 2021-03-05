// // tinh max
// function findMax(a,b,c){
    
//         return (a>b)? (a>c)? a: c : 
//                 (b>c)? b:c;
//     }
//     findMax(1,3,4)
// console.log(findMax(1,3,4));
//  cau 4
// function has(object, key) {
//     for(var baitap in object){
//         if(baitap===key){
//             return true
//         }else{
//             return false
//         }
//     }
//  }
//  console.log( has({name: "Tom", age: 21}, "name")); //logs True);
// cau2 
// function fromCharCode(){
//     for(i=97;i<=122;i++){
//         console.log(String.fromCharCode(i))
//     }
// }
// fromCharCode();
// cau 5
// function sum(numbers) {
//     var tong =0;
//     for(const i of number){
//         tong = tong +1;
//     }
//     console.log(tong);
//  }
// sum([3,4,5,6,7,8])
// cai 1
// function multiply(a,b){
//     var tich =1;
//     for(var i=a;i<b;i++){
//         tich *=i;
//     }
//     return tich;
// }
// console.log(multiply(2,5));
// cau 3
// var arr = [404, 11, 2];
// var tich1 =1;
// function multiply(arr) {
//     for(let x of arr){
//         tich1 *= x;
//     }
//     return tich1;
// }
// console.log(multiply(arr));
var arr =  [1,4,5,7,9,13,23];
// arr.push(25,32);
// arr.pop
// arr.splice(5,1)
// var newArr =  arr.filter(function(item){
//     return item%2 == 0
// })
// var newArr1 = arr.filter(function(item){
//     return item%2 == 1
// })
// var newArr2 = arr.filter(function(item){
//     return item >=7
// })
// var newArr3 = arr.map(function(item){
//     if(item > 7){
//         return item + 1;
//     }else{
//         return item;
//     }
// })
// var newArr4 = arr.splice(4 , arr.length)
// arr.sort
// console.log(arr);
var listStudent = [{
    name: 'Khải',
    gender : 'boy',
    age : 21,
    address : 'Hà Nội'
},{
    name: 'Văn anh',
    gender : 'boy',
    age : 22,
    address : 'Hà Nội'
},{
    name: 'Phương',
    gender : 'boy',
    age : 23,
    address : 'Hà Nội'
}]
var tuoiTangDan = listStudent.sort(function(item1,item2){
    return item1.age - item2.age;
    // giải thích khi sử dụng sort để so sánh hai giá trị nó sẽ gửi các giá trị đến hàm so sánh và 
    // sắp xếp các giá trị theo gt trả về (âm,không,dương) vd: var points = [40, 100];
    // points.sort(function(a, b){return b-a}); thì ở đây ta thấy hàm tính toán 40-100 = -60(gt âm) nên sẽ xếp 40 đạt giá trị thấp hơn
    // thì ta th
})
console.log(tuoiTangDan);
