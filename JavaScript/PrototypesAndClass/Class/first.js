// class

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    print(){
       return `My name is ${this.name}`;
    }
}

const person1=new person("ABC",10);
const person2=new person("EFG",15);

// console.log(person1.print());
// console.log(person2.print());


// ineritance in class 
class customer extends person{
    constructor(name,age,account_no,balance){
        super(name,age);            // it is used to call parent constructor
        this.account_no=account_no;
        this.balance=balance;
    }
    checkBalance(){
        return this.balance;
    }
}

const customer1=new customer("A",18,1234,100);
const customer2=new customer("B",19,1010,200);

console.log(customer1.balance);
console.log(customer2.balance);

