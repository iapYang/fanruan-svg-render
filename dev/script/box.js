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
            x : this.offset.left,
            y : this.offset.top + this.$box.height(),
        });

        this.pAB = this.pA.middlePoint(this.pB);
        this.pBC = this.pB.middlePoint(this.pC);
        this.pCD = this.pC.middlePoint(this.pD);
        this.pAD = this.pA.middlePoint(this.pD);

        this.lAB = new Line({
            p1: this.pA,
            p2: this.pB,
        });

        this.lBC = new Line({
            p1: this.pB,
            p2: this.pC,
        });

        this.crossCount();
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
        return this.pAD;
    }
    crossCount(line) {
        // console.log(this.lAB.crossCount(this.lBC));
    }
}
