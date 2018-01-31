'use strict';
import '../css/base.scss';

const h1 = document.createElement('h1');
const txt = document.createTextNode('Heading Tag');
h1.appendChild(txt);
document.body.appendChild(h1);

const init = 'Initial Setup is working..!';
console.log(init);
