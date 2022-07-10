import React from 'react';

type AddColorFormState = {
  name: string;
  hex: string;
};
type AddColorFormProps = {
  onSave: (name: string, hex: string) => void;
};

export class AddColorForm extends React.Component<AddColorFormProps, AddColorFormState> {
  state = {
    name: '',
    hex: '#000000',
  };

  render() {
    const { name, hex } = this.state;

    return (
      <form>
        <input
          type="text"
          onChange={(event) => {
            const colorName = event.currentTarget.value;

            this.setState({ name: colorName });
          }} />

        <input
          type="color"
          onChange={(event) => {
            const colorHex = event.currentTarget.value;

            this.setState({ hex: colorHex });
          }} />

        <button
          type="button"
          onClick={() => {
            this.props.onSave(name, hex);
          }}
        >
          Add
        </button>
      </form>
    );
  }
}
