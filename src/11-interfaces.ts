interface Driver {
    database: string;
    port: number;
    password: string;

    connect(): void;
    disconnect(): void;
}

class Postgres implements Driver {
    constructor(public database: string, public port: number, public password: string){}

    connect(): void {
        throw Error('Method not implemented')
    }

    disconnect(): void {
        throw Error('Method not implemented')
    }
}