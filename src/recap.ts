const myName = 'Mariana';
const myAge = 21;
const sum = (a: number, b: number) => { 
    return a + b;
}

sum(23, 343); 

class Person {
    //private age;
    //private name; //default is public
    constructor (private age: number, private name: string){} //crear y asignar atributos desde el contructor 

    getsummary(){
        return `my name is ${this.name} and my age is ${this.age}`;
    }
}

const mariana = new Person(21, 'Mariana')
mariana.getsummary();
 