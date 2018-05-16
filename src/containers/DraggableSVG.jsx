import React, {Component} from 'react';
import TransformationList from '../components/TransformationList.jsx';

class DraggableSVG extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        [[0.1, 0.1], [0.9, 0.1], [0.9, 0.9], [0.1, 0.9]],
        [[0.2, 0.2], [0.8, 0.2], [0.8, 0.8], [0.2, 0.8]]
        // [[100, 100], [900, 100], [900, 900], [100, 900]],
        // [[200, 200], [800, 200], [800, 800], [200, 800]]
      ]
    };
  }

  render() {
    return (
      <div className="transformation-view">
        <svg viewBox="0 0 1 1">
          <TransformationList data={this.state.data}/>
        </svg>
      </div>
    )
  }
}

export default DraggableSVG;
