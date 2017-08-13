import '../style/style.scss';

import Path from './path';

const svg = document.getElementById('svg');

new Path(svg, {
    selector: '.div1',
    position: 'right',
}, {
    selector: '.div2',
    position: 'left',
});

new Path(svg, {
    selector: '.div2',
    position: 'bottom',
}, {
    selector: '.div3',
    position: 'top',
});

new Path(svg, {
    selector: '.div3',
    position: 'right',
}, {
    selector: '.div4',
    position: 'left',
});

new Path(svg, {
    selector: '.div4',
    position: 'right',
}, {
    selector: '.div5',
    position: 'left',
});

new Path(svg, {
    selector: '.div5',
    position: 'right',
}, {
    selector: '.div6',
    position: 'left',
});

new Path(svg, {
    selector: '.div8',
    position: 'right',
}, {
    selector: '.div9',
    position: 'left',
});

new Path(svg, {
    selector: '.div9',
    position: 'right',
}, {
    selector: '.div10',
    position: 'left',
});
