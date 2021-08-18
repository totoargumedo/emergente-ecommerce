import React, { Component } from "react";

// LIBRERIAS
import { Button, Icon } from "semantic-ui-react";

class ItemOptions extends Component {
  constructor() {
    super();
    this.state = {
      initial: 0,
      colors: [
        "Azul",
        "Violeta",
        "Muy Violeta",
        "Violeta Violento",
        "Violeta RGB",
        "VIOLETA EN MAYUS",
      ],
    };
  }

  changeColorNext = () => {
    if (
      this.state.initial >= 0 &&
      this.state.initial < this.state.colors.length - 1
    ) {
      this.setState({ initial: this.state.initial + 1 });
      console.log(this.state.initial);
    } else {
      this.setState({ initial: this.state.initial });
    }
  };

  changeColorBack = () => {
    if (
      this.state.initial > 0 &&
      this.state.initial < this.state.colors.length
    ) {
      this.setState({ initial: this.state.initial - 1 });
      console.log(this.state.initial);
    } else {
      this.setState({ initial: this.state.initial });
    }
  };

  render() {
    return (
      <div>
        <h3>COLOR</h3>
        <Button animated onClick={this.changeColorBack}>
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
        <h4>{this.state.colors[this.state.initial]}</h4>
        <Button animated onClick={this.changeColorNext}>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </div>
    );
  }
}

export default ItemOptions;
