import React from 'react';
import Anchor from './Anchor.jsx';

const Quadrilateral = function(props) {

  const points = props.coords.map(xyPair => xyPair.join(',')).join(' ');
  const rect = <polygon
    points={points}
    fill="none"
    stroke="black"
    strokeWidth="0.01"
    key="-1"
  />;

  const anchors = props.coords.map((xyPair, index) => {
    return (
      <Anchor
        xyPair={xyPair}
        transIndex={props.transIndex}
        dragCallback={props.dragCallback}
        xyIndex={index}
        key={index}
      />
    );
  });

  return [rect, ...anchors];
}

export default Quadrilateral
