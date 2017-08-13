import '../style/style.scss';

import Path from './path';

const svg = document.getElementById('svg');

new Path(svg, {
    selector: '.red',
    position: 'top',
}, {
    selector: '.blue',
    position: 'top',
});
