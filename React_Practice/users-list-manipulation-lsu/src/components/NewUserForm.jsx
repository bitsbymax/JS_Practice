import {Component} from "react";

export class NewUserForm extends Component {
  state = {
    username: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onAdd(this.state.username);
    this.setState({ username: ''}); // очищення поля після додовання нового елем.
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          required={true}
          placeholder="Enter a name"
          value={this.state.username}
          onChange={(event) => {
            this.setState({
              username: event.target.value,
            })
          }}
        />
        <button>Add</button>
      </form>
    );
  }
}
