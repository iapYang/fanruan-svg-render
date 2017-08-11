export default class {
    constructor(pointA, pointB) {
        this.d = `M ${pointA.getX()} ${pointA.getY()}`;

        console.log(this.d);
    }
}
