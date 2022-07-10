import {Component} from "react";

export class User extends Component {
  state = {
    name: this.props.user.name,
  }
  render() {
    const { user, onRename, onDelete } = this.props;
    const { name } = this.state;
    return (
      <>
        {user.name}

        <form onSubmit={(event) => {
          event.preventDefault();
          onRename(user.id, name)
        }}>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              this.setState({
                name: event.target.value,
              });
            }}
          />
          <button>Save</button>
        </form>
        <button
          onClick={onDelete}
        >
          Delete
        </button>
      </>
    )
  }
}
