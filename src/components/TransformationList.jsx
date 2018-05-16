import React from 'react';
import Transformation from './Transformation.jsx';

const TransformationList = function(props) {
  return props.data.map(c => <Transformation coords={c}/>)
}

export default TransformationList
