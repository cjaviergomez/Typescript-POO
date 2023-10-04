class MyService {
    static instance: MyService | null = null;

    private constructor(public name: string){}

    getName(): string {
        return this.name;
    }

    static create(name: string): MyService {
        if(MyService.instance === null) {
            MyService.instance = new MyService(name);
        }

        return MyService.instance;
    }
}


const service1 = MyService.create('Service 1')
console.log(service1.getName());
const service2 = MyService.create('Service 2')
console.log(service2.getName());
const service3 = MyService.create('Service 3')
console.log(service3.getName());
const service4 = MyService.create('Service 4')
console.log(service4.getName());

console.log( service1 === service2);