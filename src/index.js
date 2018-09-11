/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  let spichonees = [...preferences];
  let loveTriangles = 0;
  let curSpichonee;

  for (let i = 0; i < spichonees.length; i++) {
    curSpichonee = i + 1;

    if (spichonees[i] === curSpichonee) {
      continue;
    }

    if (spichonees[spichonees[spichonees[i] - 1] - 1] === curSpichonee) {
      loveTriangles++;
      spichonees[i] = '';
    }
  }

  return loveTriangles;
};

