import $ from 'jquery';

import Box from './box';
import Line from './line';
import Point from './point';

export default class {
    constructor(svg, box1, box2) {
        this.svg = svg;
        this.position1 = box1.position;
        this.position2 = box2.position;

        this.box1 = new Box(box1.selector, this);
        this.box2 = new Box(box2.selector, this);

        this.calcFinalPoint();

        this.render();
    }
    calcFinalPoint() {
        this.startPoint = this.box1[this.position1]();
        this.endPoint = this.box2[this.position2]();

        this.strightLine = new Line(this.startPoint, this.endPoint);

        this.ifCross = this.box1.crossCount(this.strightLine)
            + this.box2.crossCount(this.strightLine) > 2;

        if (this.ifCross) {
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
        this.calcFinalPoint();
        this.path.setAttribute('d', this.calcPath(this.position1));
        this.arrow.setAttribute('d', this.calcArrowPath());
    }
    calcPath(position) {
        const gap = {
            x: -this.ssp.getX() + this.sep.getX(),
            y: -this.ssp.getY() + this.sep.getY(),
        };

        const steps = [];
        steps.push(`M ${this.startPoint.getX()} ${this.startPoint.getY()}`);
        steps.push(`L ${this.ssp.getX()} ${this.ssp.getY()}`);

        if (position === 'top' || position === 'bottom') {
            if (this.ifCross) {
                const multiplier = gap.x / 2 < 0 ? -1 : 1;

                steps.push(`l ${multiplier * Math.max(Math.abs(gap.x / 2), this.box1.width() + 10)} 0`);
                steps.push(`l 0 ${gap.y}`);
            } else {
                steps.push(`l 0 ${gap.y / 2}`);
                steps.push(`l ${gap.x} 0`);
            }
        } else {
            if (this.ifCross) {
                const multiplier = gap.y / 2 < 0 ? -1 : 1;

                steps.push(`l 0 ${multiplier * Math.max(Math.abs(gap.y / 2), this.box1.height() + 10)}`);
                steps.push(`l ${gap.x} 0`);
            } else {
                steps.push(`l ${gap.x / 2} 0`);
                steps.push(`l 0 ${gap.y}`);
            }
        }

        steps.push(`L ${this.sep.getX()} ${this.sep.getY()}`);

        steps.push(`L ${this.endPoint.getX()} ${this.endPoint.getY()}`);

        let d = '';

        steps.forEach(step => {
            d = `${d} ${step}`;
        });

        return d;
    }
    calcArrowPath() {
        const length = 5;
        const d = `M ${this.endPoint.getX()} ${this.endPoint.getY()}`;
        switch (this.position2) {
            case 'left':
                return `${d} l -${length} -${length} ${d} l -${length} ${length} Z`;
            case 'top':
                return `${d} l -${length} -${length} ${d} l ${length} -${length} Z`;
            case 'bottom':
                return `${d} l -${length} ${length} ${d} l ${length} ${length} Z`;
            case 'right':
                return `${d} l ${length} -${length} ${d} l ${length} ${length} Z`;
            default:
                return d;
        }
    }
    render() {
        this.path = this.makeSVG('path', {
            stroke: '#59ABE4',
            'stroke-width': 2,
            fill: '#fff',
            'fill-opacity': 0,
            d: this.calcPath(this.position1),
        });

        this.arrow = this.makeSVG('path', {
            stroke: '#59ABE4',
            'stroke-width': 2,
            fill: '#59ABE4',
            'fill-opacity': 1,
            d: this.calcArrowPath(),
        });

        const g = this.makeSVG('g', {});

        g.appendChild(this.path);
        g.appendChild(this.arrow);

        this.svg.appendChild(g);
    }
    makeSVG(tag, attrs) {
        const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (const k in attrs) {
            el.setAttribute(k, attrs[k]);
        }

        return el;
    }
}
