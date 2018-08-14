import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from "./styles";

import { withStyles } from '@material-ui/core/styles';

class DrawableCanvas extends Component {

  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.state = {
      drawing: false
    }
  }

  mouseDown = () => {
    this.setState({ drawing: true });
  };

  mouseUp = () => {
    this.setState({ drawing: false });
  };

  onMouseOver = (event) => {
    const offsetLeft = this.canvas.current.offsetLeft;
    const offsetTop = this.canvas.current.offsetTop;

    const mouseX = event.pageX - offsetLeft;
    const mouseY = event.pageY - offsetTop;

    this.draw(mouseX, mouseY);
  };

  draw(x, y) {
    if (this.state.drawing) {
      this.ctx.fillStyle = "#000000";
      this.ctx.fill();
      this.ctx.beginPath();
      this.ctx.arc(x, y, 3, 0, 2 * Math.PI);
      this.ctx.stroke();

      // this.ctx.fillRect(x, y, 5, 5);
    }
  }

  componentDidMount() {
    this.createCanvas();
  }

  createCanvas() {
    if (!this.ctx) {
      this.ctx = this.canvas.current.getContext("2d");
      this.canvas.current.width = this.canvas.current.clientWidth;
      this.canvas.current.height = this.canvas.current.clientHeight;
    }
  }

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <canvas className={classes.canvas}
                ref={this.canvas}
                onMouseMove={(event) => this.onMouseOver(event)}
                onMouseDown={(event) => this.mouseDown(event)}
                onMouseUp={(event) => this.mouseUp(event)}

        />
      </div>
    )
  }
}


DrawableCanvas.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DrawableCanvas);
