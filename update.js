'use strict';

let fs = require('fs');
let path = require('path');
const pageFileName = path.resolve(__dirname, 'public/index.html');
let rxJS = new RegExp('main\.[a-f0-9]+\.bundle\.js');
let rxCSS = new RegExp('[a-f0-9]+\.bundle\.css');
let dir = fs.readdirSync('./public');
let jsFileName = dir.find(x => rxJS.test(x));
let cssFileName = dir.find(x => rxCSS.test(x));
let page = fs.readFileSync(pageFileName, 'utf-8');
const data = page.replace(rxJS, jsFileName).replace(rxCSS, cssFileName);
fs.writeFileSync(pageFileName, data);