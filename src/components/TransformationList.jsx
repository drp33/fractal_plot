import React from 'react';
import Transformation from './Transformation.jsx';

const TransformationList = function(props) {
  return props.data.map((coords, index) => {
    return (
      <Transformation
        coords={coords}
        dragCallback={props.dragCallback}
        transIndex={index}
        key={index}
      />
    );
  });
}

export default TransformationList
