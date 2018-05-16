import React, {Component} from 'react';
import TransformationList from '../components/TransformationList.jsx';

class DraggableSVG extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        [[0.1, 0.1], [0.9, 0.1], [0.9, 0.9], [0.1, 0.9]],
        [[0.2, 0.2], [0.8, 0.2], [0.8, 0.8], [0.2, 0.8]]
      ]
    };
  }

  dragCallback(dx, dy, transIndex, xyIndex) {
    console.log(dx, dy, transIndex, xyIndex);
  }

  render() {
    return (
      <div className="transformation-view">
        <svg viewBox="0 0 1 1">
          <TransformationList
            data={this.state.data}
            dragCallback={this.dragCallback}
          />
        </svg>
      </div>
    )
  }
}

export default DraggableSVG;
