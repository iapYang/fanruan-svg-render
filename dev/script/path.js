import $ from 'jquery';

export default class {
    constructor(pointA, pointB) {
        this.pointStart = pointA;
        this.pointEnd = pointB;

        this.render();
    }
    render() {
        let d = `M ${this.pointStart.getX()} ${this.pointStart.getY()}`;

        const gap = {
            x: this.pointEnd.getX() - this.pointStart.getX(),
            y: this.pointEnd.getY() - this.pointStart.getY(),
        };

        d = `${d} L ${this.pointStart.getX()} ${this.pointStart.getY() + gap.y / 2}`;

        const path = this.makeSVG('path', {
            stroke: '#59ABE4',
            'stroke-width': 2,
            fill: '#fff',
            'fill-opacity': 0,
            d,
        });

        document.getElementById('svg').appendChild(path);
    }
    makeSVG(tag, attrs) {
        const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (const k in attrs) {
            el.setAttribute(k, attrs[k]);
        }

        return el;
    }
}
