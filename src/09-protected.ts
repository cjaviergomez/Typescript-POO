export abstract class Animal {
    constructor(protected name: string){}

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
            console.log('woof', this.name);
        }
    }

    move(): void {
        console.log('Moving as a Dog');
        super.move();
    }
}


const myDog = new Dog('Roki', 'Johan');
// myDog.name = 'Chase'; // It don't works because protected
myDog.woof(1);
myDog.move();