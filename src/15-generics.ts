import { Dog } from "./08-inheritance";

function getValue(value: number): number {
    return value;
}


function getValueGeneric<myType>(value: myType): myType {
    return value;
}

// myType is just an alias, we can use T, K, N, V, E
// function getValueGeneric<T>(value: T): T {
//     return value;
// }
// function getValueGeneric<K>(value: K): K {
//     return value;
// }
// function getValueGeneric<N>(value: N): N {
//     return value;
// }
// function getValueGeneric<V>(value: V): V {
//     return value;
// }

// Just a one type
console.log(getValue(12).toFixed());

// Generics allow use dynamic values.
console.log(getValueGeneric('Hi').toUpperCase());
console.log(getValueGeneric(12).toFixed());
console.log(getValueGeneric([]).length);

const myDog = new Dog('Chase', 'Johan');
console.log(getValueGeneric(myDog).greeting());

// We also can declare the type
console.log(getValueGeneric<string>('Hi').toUpperCase());
console.log(getValueGeneric<number>(12).toFixed());
console.log(getValueGeneric<string[]>([]).length);
console.log(getValueGeneric<Dog>(myDog).greeting());