class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    intro(){
        console.log(this.name + this.age)
    }
}
class Student extends Person{
    constructor(name,age,univer, className){
        super(name,age)
        this.univer = univer
        this.className = className
    }
}
var st1 = new Student('thai',25,'Nodemy','k5')
// console.log(st1)
st1.intro()