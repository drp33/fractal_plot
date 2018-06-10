import React, {Component} from 'react';

export default class FractalPlot extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const canvas = document.getElementById('fractal-canvas');
    this.ctx = canvas.getContext('2d');
    this.ctx.fillStyle = 'green';
  }

  updateCanvas() {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, 1000, 1000);
      this.props.shapes.forEach(shape => {
        this.ctx.beginPath();
        this.ctx.moveTo(shape[0][0]*1000,shape[0][1]*1000);
        for (let i = 1; i < shape.length; i++) {
          this.ctx.lineTo(shape[i][0]*1000,shape[i][1]*1000);
        }
        this.ctx.closePath();
        this.ctx.fill();
      });
      // this.ctx.fillRect(0,0, 200, 200);
    }
  }

  render() {
    this.updateCanvas();
    return <canvas id="fractal-canvas" width="1000" height="1000"></canvas>;
  };
}
