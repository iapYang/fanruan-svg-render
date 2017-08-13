import $ from 'jquery';

import Point from './point';
import Line from './line';

export default class {
    constructor(selector) {
        this.$box = $(selector);

        this.offset = this.$box.offset();

        this.pA = new Point({
            x : this.offset.left,
            y : this.offset.top,
        });

        this.pB = new Point({
            x : this.offset.left,
            y : this.offset.top + this.$box.height(),
        });

        this.pC = new Point({
            x : this.offset.left + this.$box.width(),
            y : this.offset.top + this.$box.height(),
        });

        this.pD = new Point({
            x : this.offset.left + this.$box.width(),
            y : this.offset.top,
        });

        this.pAB = this.pA.middlePoint(this.pB);
        this.pBC = this.pB.middlePoint(this.pC);
        this.pCD = this.pC.middlePoint(this.pD);
        this.pDA = this.pD.middlePoint(this.pA);

        this.lAB = new Line(this.pA, this.pB);

        this.lBC = new Line(this.pB, this.pC);

        this.lCD = new Line(this.pC, this.pD);

        this.lDA = new Line(this.pD, this.pA);
    }
    left() {
        return this.pAB;
    }
    bottom() {
        return this.pBC;
    }
    right() {
        return this.pCD;
    }
    top() {
        return this.pDA;
    }
    crossCount(line) {
        let count = 0;

        [this.lAB, this.lBC, this.lCD, this.lDA].forEach((l, index) => {
            count += l.crossCount(line);
        });

        return count;
    }
}
