interface actions {
    Eating(): void,
    Drinking(): void,
    Fighting(): boolean;
}

class Animal {
    Hunger: number;
    Thirst: number;
    IsAgressive: boolean;
}

class Cat extends Animal implements actions {
    constructor(hunger: number, thirst: number, isAgressive: boolean) {
        super();
        this.Hunger = hunger;
        this.Thirst = thirst;
        this.IsAgressive = isAgressive;
    }

    Eating(): void {

    }

    Drinking(): void {

    }

    Fighting(): boolean {
        return true;
    }
}

class Tigris extends Animal implements actions {
    constructor(hunger: number, thirst: number, isAgressive: boolean) {
        super();
        this.Hunger = hunger;
        this.Thirst = thirst;
        this.IsAgressive = isAgressive;
    }

    Eating(): void {
        console.log("sjdfbjskgffsfisfnsd");
    }

    Drinking(): void {

    }

    Fighting(): boolean {
        return true;
    }
}