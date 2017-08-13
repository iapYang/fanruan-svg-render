import $ from 'jquery';

import Point from './point';
import Line from './line';

export default class {
    constructor(selector, path, svg) {
        this.$box = $(selector);
        this.path = path;
        this.dragable = false;

        this.$svg = $(svg);

        this.refresh();

        this.addEventListener();
    }
    refresh() {
        this.position = this.$box.position();

        this.pA = new Point({
            x: this.position.left,
            y: this.position.top,
        });

        this.pB = new Point({
            x: this.position.left,
            y: this.position.top + this.$box.height(),
        });

        this.pC = new Point({
            x: this.position.left + this.$box.width(),
            y: this.position.top + this.$box.height(),
        });

        this.pD = new Point({
            x: this.position.left + this.$box.width(),
            y: this.position.top,
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
    width() {
        return this.$box.width();
    }
    height() {
        return this.$box.height();
    }
    crossCount(line) {
        let count = 0;

        [this.lAB, this.lBC, this.lCD, this.lDA].forEach((l, index) => {
            count += l.crossCount(line);
        });

        return count;
    }
    addEventListener() {
        this.$box
            .on('mousedown', () => {
                this.dragable = true;
            });
        $(document)
            .on('mousemove', e => {
                if (this.dragable) {
                    this.$box.css({
                        left: e.pageX - this.$box.width() / 2 - this.$svg.offset().left,
                        top: e.pageY - this.$box.height() / 2 - this.$svg.offset().top,
                    });
                    this.refresh();

                    this.path.refresh();
                }
            })
            .on('mouseup', () => {
                this.dragable = false;
            });
    }
}
