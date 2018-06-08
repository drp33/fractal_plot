import math from 'mathjs';

// const Ainv = [
//   [1, 0, 0],
//   [0, 1, 0],
//   [-1, -1, 1]
// ];

const Projection = function(coords) {
  // coords should be points mapped from [[1,0],[0,1],[0,0],[1,1]]
  // dummy input: [[1, 0], [0, 1], [-1, -1], [2, 1]]
  const xp123 = math.flatten(math.subset(coords, math.index([0, 1, 2], 0)));
  const yp123 = math.flatten(math.subset(coords, math.index([0, 1, 2], 1)));
  const X = math.concat([xp123], [yp123], [[1, 1, 1]], 0);
  const sf = math.multiply(math.inv(X),[[coords[3][0]], [coords[3][1]], [1]]); //scale factors
  const projection = math.concat(
    math.multiply(math.subset(X, math.index([0, 1, 2], 0)), sf[0][0]),
    math.multiply(math.subset(X, math.index([0, 1, 2], 1)), sf[1][0]),
    math.multiply(math.subset(X, math.index([0, 1, 2], 2)), sf[2][0]),
    1
  );
  console.log(projection)
  return projection;
}

// const Projection = function(coords) {
//   // variables names as denoted at https://math.stackexchange.com/questions/296794/finding-the-transform-matrix-from-4-projected-points-with-javascript/339033#339033
//   // coords should be points mapped from [[1,0],[0,1],[0,0],[1,1]]
//   // dummy input: [[1, 0], [0, 1], [-1, -1], [2, 1]]
//   console.log(coords);
//   const xp123 = math.flatten(math.subset(coords, math.index([0, 1, 2], 0)));
//   const yp123 = math.flatten(math.subset(coords, math.index([0, 1, 2], 1)));
//   console.log('1');
//   console.log(xp123);
//   const X = math.concat([xp123], [yp123], [[1, 1, 1]], 0);
//   console.log('2');
//   console.log(X);
//   const sf = math.multiply(math.inv(X),[[coords[3][0]], [coords[3][1]], [1]]); //scale factors
//   console.log('3');
//   console.log(sf);
//   const B = [
//     [sf[0][0], 0, ],
//     [0, sf[1][0]],
//     math.transpose(sf)
//   ];
//   const B = math.concat(
//     math.multiply(math.subset(X, math.index([0, 1, 2], 0)), sf[0][0]),
//     math.multiply(math.subset(X, math.index([0, 1, 2], 1)), sf[1][0]),
//     math.multiply(math.subset(X, math.index([0, 1, 2], 2)), sf[2][0]),
//     1
//   );
//   console.log('4');
//   console.log(B);
//   const C = math.multiply(B, Ainv);
//   console.log('5');
//   console.log(C);
// }


// const x = [1, 0, 0, 0];
// const y = [0, 0, 1, 1];
// const vZero = math.zeros(8);
//
// const solveLinear = function(A, b) { // solve Ax = b by least squares
//   const Atranspose = math.transpose(A);
//   const M = math.multiply(Atranspose, A);
//   console.log(A);
//   console.log(math.det(M));
//   console.log(M);
//   console.log(math.inv(M));
//   return math.dot(
//     math.multiply(math.inv(math.multiply(Atranspose, A)), Atranspose),
//     b
//   );
// }
//
// const Projection = function(coords) {
//   // find the projection mapping the unit square to coords
//   // notation as described in section 2.14 at https://cs.adelaide.edu.au/~ianr/Teaching/CompGeom/lec2.pdf
//   const A = new Array(8);
//
//   coords.forEach((xyPair, i) => {
//     const xd = xyPair[0];
//     const yd = xyPair[1];
//
//     A[2 * i] =
//       [x[i], y[i], 1, 0, 0, 0, -xd * x[i], -xd * y[i], -xd];
//     A[2 * i + 1] =
//       [0, 0, 0, x[i], y[i], 1, -yd * x[i], -yd * y[i], -yd];
//   });
//
//   console.log(solveLinear(A, vZero));
//   return console.log(solveLinear(A, vZero));
// }

export default Projection
