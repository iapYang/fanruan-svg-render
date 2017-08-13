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
    calcY(x) {
        return this.k * x + this.c;
    }
    checkPointOnline(point) {
        const xFit = point.getX() <= Math.max(this.p1.getX(), this.p2.getX())
            && point.getX() >= Math.min(this.p1.getX(), this.p2.getX());
        const yFit = point.getY() <= Math.max(this.p1.getY(), this.p2.getY())
            && point.getY() >= Math.min(this.p1.getY(), this.p2.getY());

        return yFit;
    }
    crossCount(line) {
        // let x, cross;

        // if (this.k === line.getK()) {
        //     return 0;
        // }

        // if (this.k === Infinity || line.getK() === Infinity) {
        //     const lineInfinit = this.k === Infinity ? this : line;
        //     const lineNormal = this.k === Infinity ? line : this;

        //     x = lineInfinit.getP1().getX();

        //     cross = new Point({
        //         x,
        //         y: lineNormal.calcY(x),
        //     });
        // } else {
        //     x = (line.getC() - this.getC()) / (this.getK() - line.getK());

        //     cross = new Point({
        //         x,
        //         y: this.calcY(x),
        //     });
        // }

        // // true: no line has the point
        // return !(this.checkPointOnline(cross) && line.checkPointOnline(cross)) ? 0 : 1;

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
