var diem = 7;
if (diem >= 0 && diem <= 4) {
    console.log('hoc lai');
} else if (diem >= 4, 1 && diem <= 6, 4) {
    console.log('trung binh');
} else if (diem >= 6, 5 && diem <= 7, 5) {
    console.log('kha');
} else if (diem >= 7, 5 && diem <= 10) {
    console.log('hoc sinh gioi');
} else
    console.log('khong hop le');
var exc = 3;
var salary = exc >= 3 ? 1000 : 500;
console.log(salary);

var xeploai = diem >= 0 && diem <= 4 ? 'hoc lai' :
        diem >= 4.1 && diem <= 6.4 ? 'trung binh' :
        diem >= 6.5 && diem <= 7.4 ? 'kha' :
        diem >= 7.5 && diem <= 10 ? 'hoc lai' :
        'khong hop le';
console.log(xeploai);
/*
for in chỉ dùng cho các object
var arr1 = [4,5,6,7,8,9]
arr.push(0,23) thêm phần tử ở cuối mảng
arr.pop()   xóa phần tử ở cuối mảng
arr.shift() xóa phần tử ở đầu mảng
arr.unshift() thêm phần tử ở đầu mảng
arr.slice(,) in ra các giá trị vị trí trong mảng ở khảng nhập
arr.splice(2,3) xóa 3 phần tử từ vị trí số 2 trong mảng
arr.sort  sắp xếp mảng
*/ 