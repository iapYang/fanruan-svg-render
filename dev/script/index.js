import '../style/style.scss';

import Box from './box';
import Line from './line';

const b1 = new Box('.red');
const b2 = new Box('.blue');

const l1 = new Line({
    p1: b1.bottom(),
    p2: b2.top(),
}).print();
