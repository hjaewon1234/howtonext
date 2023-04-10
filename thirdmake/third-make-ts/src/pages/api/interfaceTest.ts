export interface test {
    id: number;
    password: string;
}
export interface test2 {
    name: string;
    bool?: boolean;
}
export interface test3 extends test2 {}
export interface funcTest {
    <T>(_num: T): T;
}
interface CraftBeer {
    beerName: string;
    nameBeer(beer: string): void;
}

class myBeer implements CraftBeer {
    beerName: string = 'Baby Guinness';
    nameBeer(b: string) {
        this.beerName = b;
    }
    constructor() {}
}

interface test4 {
    id: string;
    password: number;
}
