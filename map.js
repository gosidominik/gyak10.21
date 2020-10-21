const fillMap = (width, height, player, apples) => {
    const mapArr = new Array (width);
    for (let i = 0; i < mapArr.length; i++) {
        mapArr[i] = new Array (height);
    }
    return mapArr;
};

module.exports = {
    fillMap
};