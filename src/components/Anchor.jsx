import React from 'react';

const Anchor = function(props) {

  let startX, startY = 0;

  const startDrag = (evt) => {
    startX = evt.target.cx.animVal.value;
    startY = evt.target.cy.animVal.value;
    evt.target.addEventListener('mousemove', drag);
    evt.target.addEventListener('mouseup', endDrag);
    evt.target.addEventListener('mouseleave', endDrag);
  }

  const drag = (evt) => {
    const CTM = evt.target.getScreenCTM(); // for transforming svg ~ screen coords
    const dx = startX - (evt.clientX - CTM.e) / CTM.a;
    const dy = startY - (evt.clientY - CTM.f) / CTM.d;
    console.log('dx:', dx, 'dy:', dy);
    console.dir(evt.target);
  }

  const endDrag = (evt) => {
    evt.target.removeEventListener('mousemove', drag);
    evt.target.removeEventListener('mouseup', endDrag);
    evt.target.removeEventListener('mouseleave', endDrag);
  }

  const anchor = <circle
    cx={props.xyPair[0]}
    cy={props.xyPair[1]}
    r="0.02"
    className="draggable"
    onMouseDown={startDrag}
  />;

  return anchor;
}

export default Anchor
