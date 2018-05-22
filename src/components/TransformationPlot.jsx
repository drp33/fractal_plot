import React from 'react';
import TransformationList from './TransformationList.jsx';

const TransformationPlot = function(props) {
  return (
    <svg viewBox="0 0 1 1">
      <TransformationList
        transforms={props.transforms}
        dragCallback={props.dragCallback}
      />
    </svg>
  )
}

export default TransformationPlot
