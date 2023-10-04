console.log(Math.PI);
console.log(Math.max(1,2,3,4,5,6));

export class MyMath {
    static readonly PI = 3.14;

    static max(...numbers: number[]): number {
        return numbers.reduce((max, item) => item >= max ? item : max, 0);
    }
}

console.log(MyMath.PI);
// MyMath.PI = 3.1416; // It is readonly
console.log(MyMath.max(1,2,3,4,5,6,7));