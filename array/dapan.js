// Câu 1
/**
 * Viết hàm multiply trả về tích các số từ a đến b, không tính b 
 * Ví dụ: multiply(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */

// function calculate(a, b) {
//     if (a >= b - 1) {
//         return a
//     }
//     return a * calculate(a + 1, b)
//   }
function calculate(a, b) {
    var result = 1; 
    for(i = a;i < b;i++){
      result *= i;
    }
    return result;
  }
// console.log(calculate(2,5));

// Câu 2
/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */
function fromCharCode() {
    // viết code ở đây.
      var string = "";
      for(var i = 97; i <= 122; i++){
          string += String.fromCharCode(i)
      }
      return string
   }
// console.log(fromCharCode());
// Câu 3: Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
function multiply(arr) {
    var result = 1;
    for(var cal of arr){
      result *= cal;
    }
    return result;
  }
//   console.log(multiply([404, 11,2,2,3]));
//   multiply([404, 11,2]) // logs 8888
  // Câu 4
/**
 * viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */   
 function has(object, key) {
    for(var baitap in object){
        if(baitap===key){
            return true
        }else{
            return false
        }
    }
 }
//  console.log( has({name: "Tom", age: 21}, "name")); //logs True);
 // Câu 5: 
/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */
// function sum(numbers) {
//     // Write code here...
//     var sum = 0;
//     for(var value of numbers){
//         sum += value;
//     }
//     return sum;
//  }
//  Câu 6 viết hàm findMax tìm giá trị của 1 mảng gồm 3 giá trị người
// dùng nhập vào tìm giá trị lớn nhất
function findMax(a,b,c){
    // viết code ở đây.
        return (a>b)? (a>c)? a: c : 
                (b>c)? b:c;
    }
    findMax(1,3,4)
// console.log(findMax(1,3,4));
 // bài 1 (1.5 điểm)
/**
 * cho biến arr = [1,23,9,7,5,13,4];
 * 1.1 thêm 2 giá trị 25 , 32 vô mảng (0.1 đ)
 * 1.2 xóa bỏ giá trị 32 (0.1 đ)
 * 1.3 xóa bỏ giá trị 13 (0.1 đ)
 * ****SỬ DỤNG MAP VÀ FILTER
 * 1.4  in ra các số chẵn trong mảng (0.2 đ) 
 * 1.5  in ra các số lẻ trong mảng (0.2 đ) 
 * 1.6  in ra các số lớn hơn hoặc bằng 7 (0.2 đ) 
 * 1.7  Tìm các số > 5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị (0.2 đ) 
 * 1.8: dùng slice để copy mảng từ phần tử số 4 đến phần tử cuối cùng (0.2 đ) 
 * 1.9: sắp xếp phần tử theo mảng tăng dần (0.2 đ)
 */
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
// bài 2 (1 điểm)
/**
 * tạo mảng obj tên là listStudent gồm danh sách các thành viên trong lớp
 *  gồm tên giới tính tuổi nơi ở
 * 2.1 : sắp xếp tuổi tăng dần
 */
var listStudent = [{
    name: 'Khải',
    gender : 'boy',
    age : 213,
    address : 'Hà Nội'
},{
    name: 'Văn anh',
    gender : 'boy',
    age : 22,
    address : 'Hà Nội'
},,{
    name: 'Phương',
    gender : 'boy',
    age : 23,
    address : 'Hà Nội'
}]
var tuoiTangDan = listStudent.sort(function(item1,item2){
    if(item1.age > item2.age){
        return 1
    }
    if(item1.age < item2.age){
        return -1
    }
    if(item1.age = item2.age){
        return 0
    }
})
// console.log(tuoiTangDan);