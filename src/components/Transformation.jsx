import React from 'react';

const Transformation = function(props) {

  const points = props.coords.map(xyPair => xyPair.join(',')).join(' ');
  const rect = <polygon
    points={points}
    fill="none"
    stroke="black"
    stroke-width="0.01"
  />;

  const anchors = props.coords.map((xyPair) => {
    const anchor = <circle cx={xyPair[0]} cy={xyPair[1]} r="0.02"/>;
    return anchor;
  });

  return [rect, ...anchors];
}

export default Transformation
