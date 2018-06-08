import math from 'mathjs';

const Ainv = [
  [1,0,0],
  [0,1,0],
  [1,1,-1]
];

const Projection = function() {
  this.transformationMatrix = math.eye(3);
}

Projection.prototype.setTransformation = function(coords) {
  // coords should be points transformed from [[1,0],[0,1],[0,0],[1,1]]
  // method adopted from https://math.stackexchange.com/questions/296794/finding-the-transform-matrix-from-4-projected-points-with-javascript/339033#339033
  const xp123 = math.flatten(math.subset(coords, math.index([0, 1, 2], 0)));
  const yp123 = math.flatten(math.subset(coords, math.index([0, 1, 2], 1)));
  const X = math.concat([xp123], [yp123], [[1, 1, 1]], 0);
  const sf = math.multiply(math.inv(X),[[coords[3][0]], [coords[3][1]], [1]]); //scale factors
  const B = math.concat(
    math.multiply(math.subset(X, math.index([0, 1, 2], 0)), sf[0][0]),
    math.multiply(math.subset(X, math.index([0, 1, 2], 1)), sf[1][0]),
    math.multiply(math.subset(X, math.index([0, 1, 2], 2)), sf[2][0]),
    1
  );
  this.transformationMatrix = math.multiply(B, Ainv);
}

Projection.prototype.transform = function(coords) {
  const newCoords = new Array(coords.length);
  newCoords.forEach((xyPair, index) => {

    const xyPrime = math.multiply(
      this.transformationMatrix,
      [[xyPair[0]],[xyPair[1],[1]]]
    );

    newCoords[index] = [xyPrime[0]/xyPrime[1], xyPrime[0]/xyPrime[2]];
  });
}

export default Projection
