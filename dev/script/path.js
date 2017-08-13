import $ from 'jquery';

import Box from './box';

export default class {
    constructor(svg, box1, box2) {
        this.svg = svg;
        this.box1 = new Box(box1.selector);
        this.box2 = new Box(box2.selector);

        this.startPoint = this.box1[box1.position]();
        this.endPoint = this.box2[box2.position]();

        this.ssp = this.startPoint;
        this.sep = this.endPoint;

        this.render();
    }
    render() {
        const ifToper = this.ssp.getY() >= this.sep.getY();
        const ifLefter = this.ssp.getX() >= this.sep.getX();

        const gap = {
            x: -(this.ssp.getX() - this.sep.getX()),
            y: -(this.ssp.getY() - this.sep.getY()),
        };

        const d = `M ${this.ssp.getX()} ${this.ssp.getY()} l 0 ${gap.y / 2} l ${gap.x} 0 l 0 ${gap.y / 2}`;

        const path = this.makeSVG('path', {
            stroke: '#59ABE4',
            'stroke-width': 2,
            fill: '#fff',
            'fill-opacity': 0,
            d,
        });

        this.svg.appendChild(path);
    }
    makeSVG(tag, attrs) {
        const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (const k in attrs) {
            el.setAttribute(k, attrs[k]);
        }

        return el;
    }
}
