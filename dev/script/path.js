import $ from 'jquery';

import Box from './box';
import Line from './line';
import Point from './point';

export default class {
    constructor(svg, box1, box2) {
        this.svg = svg;
        this.position1 = box1.position;
        this.position2 = box2.position;

        this.box1 = new Box(box1.selector);
        this.box2 = new Box(box2.selector);

        this.startPoint = this.box1[this.position1]();
        this.endPoint = this.box2[this.position2]();

        this.ssp = this.startPoint;
        this.sep = this.endPoint;

        this.render();
    }
    calcFinalPoint() {
        this.startPoint = this.box1[this.position1]();
        this.endPoint = this.box2[this.position2]();

        this.strightLine = new Line(this.startPoint, this.endPoint);

        if (this.box1.crossCount(this.strightLine) + this.box2.crossCount(this.strightLine) > 2) {
            this.ssp = this.getFinalPoint(this.position1, this.startPoint);
            this.sep = this.getFinalPoint(this.position2, this.endPoint);
        } else {
            this.ssp = this.startPoint;
            this.sep = this.endPoint;
        }
    }
    getFinalPoint(position, point) {
        let x = 0, y = 0;
        switch (position) {
            case 'top':
                x = point.getX();
                y = point.getY() - 10;
                break;
            case 'left':
                x = point.getX() - 10;
                y = point.getY();
                break;
            case 'bottom':
                x = point.getX();
                y = point.getY() + 10;
                break;
            case 'right':
                x = point.getX() + 10;
                y = point.getY();
                break;
            default:
                break;
        }

        return new Point({
            x,
            y,
        });
    }
    refresh() {
        this.startPoint = this.box1[this.position1]();
        this.endPoint = this.box2[this.position2]();



        this.ssp = this.startPoint;
        this.sep = this.endPoint;

        this.render();
    }
    render() {
        const ifToper = this.ssp.getY() >= this.sep.getY();
        const ifLefter = this.ssp.getX() >= this.sep.getX();

        const gap = {
            x: -this.ssp.getX() + this.sep.getX(),
            y: -this.ssp.getY() + this.sep.getY(),
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
