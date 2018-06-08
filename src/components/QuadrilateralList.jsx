import React from 'react';
import Quadrilateral from './Quadrilateral.jsx';

const QuadrilateralList = function(props) {
  return props.transforms.map((coords, index) => {
    return (
      <Quadrilateral
        coords={coords}
        dragCallback={props.dragCallback}
        transIndex={index}
        key={index}
      />
    );
  });
}

export default QuadrilateralList
