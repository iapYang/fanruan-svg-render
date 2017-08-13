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

new Path(svg, {
    selector: '.div11',
    position: 'right',
}, {
    selector: '.div12',
    position: 'left',
});

new Path(svg, {
    selector: '.div12',
    position: 'right',
}, {
    selector: '.div13',
    position: 'left',
});

new Path(svg, {
    selector: '.div7',
    position: 'right',
}, {
    selector: '.div11',
    position: 'top',
});

new Path(svg, {
    selector: '.div5',
    position: 'bottom',
}, {
    selector: '.div14',
    position: 'top',
});

new Path(svg, {
    selector: '.div15',
    position: 'right',
}, {
    selector: '.div16',
    position: 'left',
});

new Path(svg, {
    selector: '.div16',
    position: 'right',
}, {
    selector: '.div17',
    position: 'left',
});

new Path(svg, {
    selector: '.div13',
    position: 'bottom',
}, {
    selector: '.div16',
    position: 'top',
});

new Path(svg, {
    selector: '.div14',
    position: 'bottom',
}, {
    selector: '.div18',
    position: 'top',
});

new Path(svg, {
    selector: '.div19',
    position: 'right',
}, {
    selector: '.div20',
    position: 'left',
});

new Path(svg, {
    selector: '.div20',
    position: 'right',
}, {
    selector: '.div21',
    position: 'left',
});

new Path(svg, {
    selector: '.div7',
    position: 'bottom',
}, {
    selector: '.div19',
    position: 'top',
});
