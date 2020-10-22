const { keyIn } = require('readline-sync');
const { fillMap, drawMap } = require('./map');
const { randomNum } = require('./random');

const width = 20;
const height = 10;

let map = [];
const apples = [];
const player = { pos: { x: 1, y: 1 }, score: 0 };
const min = width - 2;
const max = height - 2;
let key;

for (let i = 0; i < 5; i++) {
  apples.push({ x: randomNum(min), y: randomNum(max) });
};

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === 'q') {
    process.exit();
  }
  if (key === 's') {
    player.pos.y++;
    if (player.pos.y === height - 1) {
      player.pos.y = height - 2;
    }
  } else if (key === 'w') {
    player.pos.y--;
    if (player.pos.y === 0) {
      player.pos.y = 1;
    }
  } else if (key === 'a') {
    player.pos.x--;
    if (player.pos.x === 0) {
      player.pos.x = 1;
    }
  } else if (key === 'd') {
    player.pos.x++;
    if (player.pos.x === width - 1) {
      player.pos.x = width - 2;
    }
  }
  map = fillMap(width, height, player, apples);
  drawMap(map, player.score);
});
