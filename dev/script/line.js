export default class {
    constructor({
        p1,
        p2,
    }) {
        // y = kx + c
        this.p1 = p1;
        this.p2 = p2;
        this.k = (this.p2.getY() - this.p1.getY()) / (this.p2.getX() - this.p1.getX());
        this.c = this.p1.getY() - this.k * this.p1.getX();
    }
    print() {
        console.log(`y = ${this.k}x + ${this.c}`);
    }
}
