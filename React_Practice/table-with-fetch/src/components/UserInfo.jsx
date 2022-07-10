import {Component} from "react";
import Loader from "./Loader";
import {getUser} from "../users";
import {getUserTodos} from "../users";

export class UserInfo extends Component {
  state = {
    user: null,
    todos: [],
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.loadData();
    }
  }

  async loadData() {
    const [user, todos] = await Promise.all([
      getUser(this.props.userId),
      getUserTodos(this.props.userId)
    ]);

    this.setState({user, todos});
  }

  render() {
    const {todos, user} = this.state;

    if (!user) {
      return <Loader/>
    }
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">
                  {user.name}
                </p>
                <p className="subtitle is-6">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="content">
              <p className="title is-5">Todos:</p>

              <ul>
                {todos.map(todo => (
                  <li key={todo.id}>
                    <label htmlFor="" className="checkbox">
                      <input type="checkbox" checked={todo.completed} name="" id=""/>
                      &nbsp;
                      {todo.title}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
