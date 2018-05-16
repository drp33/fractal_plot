import React, {Component} from 'react';
import TransformationList from '../components/TransformationList.jsx';

class DraggableSVG extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transforms: [
        [[0.1, 0.1], [0.9, 0.1], [0.9, 0.9], [0.1, 0.9]],
        [[0.2, 0.2], [0.8, 0.2], [0.8, 0.8], [0.2, 0.8]]
      ]
    };

    this.dragCallback = this.dragCallback.bind(this);
  }

  dragCallback(dx, dy, transIndex, xyIndex) {

    let newTransforms = this.state.transforms.map((transform) => {
      return transform.map((xyPair) => {
        return [...xyPair];
      });
    });

    newTransforms[transIndex][xyIndex][0] += dx;
    newTransforms[transIndex][xyIndex][1] += dy;

    this.setState({transforms: newTransforms});
  }

  render() {
    return (
      <div className="transformation-view">
        <svg viewBox="0 0 1 1">
          <TransformationList
            transforms={this.state.transforms}
            dragCallback={this.dragCallback}
          />
        </svg>
      </div>
    )
  }
}

export default DraggableSVG;
