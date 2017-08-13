import Point from './point';

export default class {
    constructor(p1, p2) {
        // y = kx + c
        this.p1 = p1;
        this.p2 = p2;
        this.k = (this.p2.getY() - this.p1.getY()) / (this.p2.getX() - this.p1.getX());
        this.k = this.k === -Infinity ? Infinity : this.k;
        this.c = this.p1.getY() - this.k * this.p1.getX();
    }
    print() {
        console.log(`y = ${this.k}x + ${this.c}`);
    }
    getP1() {
        return this.p1;
    }
    getP2() {
        return this.p2;
    }
    getK() {
        return this.k;
    }
    getC() {
        return this.c;
    }
    crossCount(line) {
        const aa = this.p1;
        const bb = this.p2;
        const cc = line.getP1();
        const dd = line.getP2();

        if (Math.max(aa.getX(), bb.getX()) < Math.min(cc.getX(), dd.getX())) {
            return 0;
        }
        if (Math.max(aa.getY(), bb.getY()) < Math.min(cc.getY(), dd.getY())) {
            return 0;
        }
        if (Math.max(cc.getX(), dd.getX()) < Math.min(aa.getX(), bb.getX())) {
            return 0;
        }
        if (Math.max(cc.getY(), dd.getY()) < Math.min(aa.getY(), bb.getY())) {
            return 0;
        }
        if (this.mult(cc, bb, aa) * this.mult(bb, dd, aa) < 0) {
            return 0;
        }
        if (this.mult(aa, dd, cc) * this.mult(dd, bb, cc) < 0) {
            return 0;
        }

        return 1;
    }
    mult(a, b, c) {
        return (a.getX() - c.getX()) * (b.getY() - c.getY()) -
            (b.getX() - c.getX()) * (a.getY() - c.getY());
    }
}
