import React, {Component} from 'react';
import TransformationPlot from '../components/TransformationPlot.jsx';

class FractalContainer extends Component {
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
      <div id="transformation-view">
        <TransformationPlot
          dragCallback={this.dragCallback}
          transforms={this.state.transforms}
        />
      </div>
    )
  }
}

export default FractalContainer
