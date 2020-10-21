const {fillMap} = require('./map');

const width = 30;
const height = 20;

const map = [];
const apples = [];
const player = { pos:{x: 1, y: 1}, score: 0};

map = fillMap(width, height, player, apples);
