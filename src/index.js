/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var p = preferences,
      returns = 0;
  for (var i = 0; i < p.length; i++) {
    if (p[i] !== 0 && p[p[i] - 1] !== p[i]) {
        if (p[p[p[i] - 1] - 1] === i + 1) {
          returns += 1;
        }
    }
  }
  return returns / 3;
}
