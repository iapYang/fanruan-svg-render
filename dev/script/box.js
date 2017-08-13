import $ from 'jquery';

import Point from './point';

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

        this.pAB.print();
    }
}
