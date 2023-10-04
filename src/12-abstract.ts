import { Dog } from './09-protected';

// const myAnimal = new Animal('Animal'); // We can not create instances from abstract class
// myAnimal.greeting();

const chase = new Dog('Chase', 'Johan');
chase.greeting();