import React from 'react';

class Toggle extends React.Component {
  state = {
    isToggleOn: true
  }
  //? Ця прив'язка необхідна, щоб `this` працював у функції зворотнього виклику
  handleClick = this.handleClick.bind(this);

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;
