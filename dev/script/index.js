import '../style/style.scss';

import Path from './path';

const svg = document.getElementById('svg');

new Path(svg, {
    selector: '.red',
    position: 'bottom',
}, {
    selector: '.blue',
    position: 'top',
});
