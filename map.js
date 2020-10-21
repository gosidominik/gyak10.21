const { table, getBorderCharacters } = require('table');

const fillMap = (width, height, player, apples) => {
  const mapArr = new Array(height);
  for (let i = 0; i < height; i++) {
    mapArr[i] = new Array(width);
    for (let j = 0; j < width; j++) {
      if (i === 0 || j === 0 || i === height - 1 || j === width - 1) {
        mapArr[i][j] = '+';
      }
      if (player.pos.x === j && player.pos.y === i) {
        mapArr[i][j] = 'x';
      }
    }
  }
  return mapArr;
};

const drawMap = (map) => {
  let output = table(map, {
    border: getBorderCharacters('void'),
    columnDefault: {
      paddingLeft: 0,
      paddingRight: 1
    },
    drawHorizontalLine: () => {
      return false;
    }
  });
  console.clear();
  console.log(output);
};

module.exports = {
  fillMap,
  drawMap
};
