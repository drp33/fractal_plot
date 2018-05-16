import React from 'react';

const Anchor = function(props) {

  let xPage, yPage = 0; // x-y cursor coords (on the whole web page)

  const startDrag = (evt) => {
    xPage = evt.clientX;
    yPage = evt.clientY;

    const container = document.getElementById('transformation-view');
    container.addEventListener('mousemove', drag);
    container.addEventListener('mouseup', endDrag);
  }

  const drag = (evt) => {
    const dxPage = evt.clientX - xPage;
    const dyPage = evt.clientY - yPage;
    xPage = evt.clientX;
    yPage = evt.clientY;

    const CTM = evt.target.getScreenCTM(); // transforms web page -> svg coords

    const dxSVG = (dxPage - CTM.e) / CTM.a;
    const dySVG = (dyPage - CTM.f) / CTM.d;

    props.dragCallback(dxSVG, dySVG, props.transIndex, props.xyIndex);
  }

  const endDrag = (evt) => {
    const container = document.getElementById('transformation-view');
    container.removeEventListener('mousemove', drag);
    container.removeEventListener('mouseup', endDrag);
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
