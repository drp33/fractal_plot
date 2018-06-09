import React, {Component} from 'react';
import QuadrilateralPlot from '../components/QuadrilateralPlot.jsx';
import FractalPlot from '../components/FractalPlot.jsx';
import Projection from '../manipulation/Projection.js';

class FractalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transforms: [],
      shapes: []
    };

    this.dragCallback = this.dragCallback.bind(this);
    this.addTransform = this.addTransform.bind(this);
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

    const projections = this.state.transforms.map(transform => {
      const projection = new Projection();
      projection.setTransformation(transform);
      return projection;
    });

    let shapes = [[[0,0],[1,0],[1,1],[0,1]]]; // this bit needs work..something not right!
    for (let i = 0; i < 3; i++) {
      let prevShapes = shapes.map(shape => shape.map(xyPair => xyPair.slice()));
      shapes = [];
      for (let j = 0; j < projections.length; j++) {
        shapes = shapes.concat(projections[j].transform(prevShapes));
      };
    }
    console.log(shapes);

    this.setState({shapes: shapes});
  }

  addTransform() {
    this.setState(prevState => ({ // needs improving - ...prevState.transforms only spreads the outermost array. Should treat as if immutable
      transforms: [...prevState.transforms, [[0,0],[1,0],[1,1],[0,1]]]
    }));
  }

  render() {
    return (
      <div>
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
        <button id="btn-add-transformation" type="button" onClick={this.addTransform}>+</button>
      </div>
    )
  }
}

export default FractalContainer
