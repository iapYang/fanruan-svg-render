import $ from 'jquery';

export default class {
    constructor({
        x,
        y,
    }) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    print() {
        console.log('x', this.x, 'y', this.y);
    }
    middlePoint(point) {
        return new this.constructor({
            x: (this.x + point.getX()) / 2,
            y: (this.y + point.getY()) / 2,
        });
    }
}
