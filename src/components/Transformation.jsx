import React from 'react';

const Transformation = function(props) {
  const points = props.coords.map((xyPair) => xyPair.join(',')).join(' ');

  return (
    <polygon points={points} fill="none" stroke="black" stroke-width="0.01"/>
  )
}

export default Transformation
