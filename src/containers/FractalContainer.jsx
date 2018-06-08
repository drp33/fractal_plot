import React, {Component} from 'react';
import QuadrilateralPlot from '../components/QuadrilateralPlot.jsx';
import FractalPlot from '../components/FractalPlot.jsx';
import Projection from '../manipulation/Projection.js';

class FractalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transforms: [
        [[0.25, 0], [0.75, 0], [0.75, 0.5], [0.25, 0.5]],
        [[0, 0.5], [0.5, 0.5], [0.5, 1], [0, 1]],
        [[0.5, 0.5], [1, 0.5], [1, 1], [0.5, 1]]
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
    Projection([[1, 0], [0, 1], [-1, -1], [2, 1]]);
  }

  render() {
    return (
      <div id="plot-container">
        <div id="transformation-view" className="plot">
          <QuadrilateralPlot
            dragCallback={this.dragCallback}
            transforms={this.state.transforms}
          />
        </div>
        <div id="fractal-view" className="plot">
          <FractalPlot
            transforms={this.state.transforms}
          />
        </div>
      </div>
    )
  }
}

export default FractalContainer
