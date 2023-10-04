export class Animal {
    constructor(public name: string){}

    move(): void {
        console.log('Moving');
    }

    greeting(): void {
        console.log(`Hi! I'm ${this.name}`);
    }
}

export class Dog extends Animal {

    constructor(dogName: string, public owner: string){
        super(dogName);
    }
    
    woof(times: number): void {
        for (let index = 0; index < times; index++) {
            console.log('woof');
        }
    }
}


const myAnimal = new Animal('myAnimal');
myAnimal.move();
myAnimal.greeting();

const myDog = new Dog('Roki', 'Johan');
myDog.woof(5);