// setTimeout(function(){
//     console.log('Da xu ly xong');
// }, 1000);
// tạo promise
// var p1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('Da xu ly xong');
//         // reject('chua ly xong');
//     }, 1000);
// })


// sử dụng promise
// p1
// .then(function(data){
//     console.log(data)
// })
// sau 1s promise sex trả về kết quả cho .then() nên ta viết vào trong 
// 1 function
// .catch(function(err){
//     console.log(err)
// })
// Nếu setTimeout chạy resolve thì .then sẽ được thwucj hiện -thwucj hiện thành công
// Nếu setTimeout chạy reject thì .catch sẽ được thwucj hiện thwucj hiện thất bại
// Mục tiêu là Promise k muốn viết logic trong setTimeout 
// vì khi viết logic trong settime thì sẽ rất khó tùy biến


var fs = require('fs')

// console.log(1);
// fs.readFile('./dulieu.txt',function(err,data){
//     console.log(data.toString());
// })
// console.log(3);
// kết quả ra 1 3 2 do hàm readFile là hàm bất đồng bộ nên hàm sẽ đọc file trc rồi in ra 2

var p1 = new Promise(function(resolve,reject){
    fs.readFile('./dulieu.txt',function(err,data){
    if(err){
        reject('loi doc file');
    }else{
        resolve(data.toString());
    }
})
})

p1
.then(function(data){
    console.log('promise then ',data)
})
.catch(function(err){
    console.log('promise catch ',err)
})