export class Person{

    constructor( public name : string, public lastName : string){}

    /*
    The above code is equals to:
    
    name: string = '';
    lastName: string = '';

    constructor(name: string, lastName: string){
        this.lastName = lastName;
        this.name = name;
    }
    */
}