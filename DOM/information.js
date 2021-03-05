var array = [1,5,7,8,9,15,8];
let fiarr1 = array.filter((value) => {
    return value %2 == 0;
});
console.log(fiarr1);
let fiarr2 = array.filter((value) => {
    return value %2 == 1;
});
console.log(fiarr2);
let fiarr3 = array.filter((value) => {
    return value >= 5;
});
console.log(fiarr3);
let fiarr4 = array.filter((value) => {
    return value %5 == 0;
});
console.log(fiarr4);
