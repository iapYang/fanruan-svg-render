import $ from 'jquery';

export default class {
    constructor(selector, position) {
        this.$box = $(selector);
        this.offset = this.$box.offset();
        this.position = position;

        switch (this.position) {
            case 'top':
                this.x = this.offset.left + this.$box.width() / 2;
                this.y = this.offset.top;
                break;
            case 'bottom':
                this.x = this.offset.left + this.$box.width() / 2;
                this.y = this.offset.top + this.$box.height();
                break;
            case 'left':
                this.x = this.offset.left;
                this.y = this.offset.top + this.$box.height() / 2;
                break;
            case 'right':
                this.x = this.offset.left + this.$box.width();
                this.y = this.offset.top + this.$box.height() / 2;
                break;
            default:
                break;
        }

        this.x = this.offset.left + this.$box.width() / 2;
        this.y = this.offset.top + this.$box.height();

        console.log(this.x, this.y);
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}
