interface iPerson {
    name: string;
    age: number;
}

class man {
    constructor(public config: iPerson) {

    }
}
interface animal {
    eat();
}
class tiger implements animal {
    eat() {

    }
}