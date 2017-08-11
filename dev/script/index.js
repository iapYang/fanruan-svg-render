import '../style/style.scss';

import Point from './point';
import Path from './path';

const pointA = new Point('.red', 'bottom');
const pointB = new Point('.blue', 'top');

new Path(pointA, pointB);

