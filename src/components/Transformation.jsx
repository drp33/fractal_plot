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

    // const anchor = <circle
    //   cx={xyPair[0]}
    //   cy={xyPair[1]}
    //   r="0.02"
    //   className="draggable"
    //   onMouseDown={startDrag}
    // />;
    //
    // return anchor;

    return <Anchor xyPair={xyPair} />
  });

  return [rect, ...anchors];
}

// const starter = evt => drag(evt, startX, startY);
// const ender = evt => endDrag(evt, starter);
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

// function startDrag(evt) {
//   startX = evt.target.cx.animVal.value;
//   startY = evt.target.cy.animVal.value;
//   evt.target.addEventListener('mousemove', drag);
//   evt.target.addEventListener('mouseup', endDrag);
//   evt.target.addEventListener('mouseleave', endDrag);
// }
//
// function drag(evt) {
//   const CTM = evt.target.getScreenCTM(); // for transforming svg ~ screen coords
//   const dx = startX - (evt.clientX - CTM.e) / CTM.a;
//   const dy = startY - (evt.clientY - CTM.f) / CTM.d;
//   console.log('dx:', dx, 'dy:', dy);
//   console.dir(evt.target);
// }
//
// function endDrag(evt) {
//   evt.target.removeEventListener('mousemove', drag);
//   evt.target.removeEventListener('mouseup', endDrag);
//   evt.target.removeEventListener('mouseleave', endDrag);
// }

export default Transformation
