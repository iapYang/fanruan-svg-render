import '../style/style.scss';

import Box from './box';
import Line from './line';

const b1 = new Box('.red');
const b2 = new Box('.blue');

const l1 = new Line(b1.bottom(), b2.top());

console.log(b1.crossCount(l1));
