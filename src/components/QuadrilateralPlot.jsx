import React from 'react';
import QuadrilateralList from './QuadrilateralList.jsx';

const QuadrilateralPlot = function(props) {
  return (
    <svg viewBox="0 0 1 1">
      <QuadrilateralList
        transforms={props.transforms}
        dragCallback={props.dragCallback}
      />
    </svg>
  )
}

export default QuadrilateralPlot
