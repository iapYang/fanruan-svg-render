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

        const $path = $(`
            <path></path>
        `);

        $path
            .attr('stroke', '#59ABE4')
            .attr('stroke-width', 2)
            .attr('fill', '#fff')
            .attr('fill-opacity', 0)
            .attr('d', $('.path-1').attr('d'));

        $('svg').append($path);
    }
}
