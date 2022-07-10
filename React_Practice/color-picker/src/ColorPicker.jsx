import {Component} from "react";

export class ColorPicker extends Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    const {colors, value, onChange} = this.props;
    const {isOpen} = this.state;
    return (
      <div className="ColorPicker">
        <button
          onClick={this.toggle}
          style={{color: value}}>
          {value || 'Choose a color'}
        </button>

        {isOpen && (
          <ul>
            {colors.map(color => (
              <li
                key={color}
                style={{color}}
                onClick={() => {
                  onChange(color);
                  this.toggle();
                }}
              >{color}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
