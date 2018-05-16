import React from 'react';
import Anchor from './Anchor.jsx';

const Transformation = function(props) {

  const points = props.coords.map(xyPair => xyPair.join(',')).join(' ');
  const rect = <polygon
    points={points}
    fill="none"
    stroke="black"
    stroke-width="0.01"
  />;

  const anchors = props.coords.map((xyPair) => <Anchor xyPair={xyPair} />);

  return [rect, ...anchors];
}

export default Transformation
