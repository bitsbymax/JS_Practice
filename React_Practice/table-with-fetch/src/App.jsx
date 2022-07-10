import {Component} from "react";
import {UsersTable} from "./components/UsersTable";
import {UserInfo} from "./components/UserInfo";
import {LoadingError} from "./components/LoadingError";
import {getUsers} from "./users";

import classNames from "classnames";
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css';

class App extends Component {
  state = {
    users: [],
    userId: 0,
    loading: false,
    hasLoadingError: false,
    isInitialized: false,
  }

  loadUsers = async () => {
    this.setState({
      loading: true,
      hasLoadingError: false,
    });

    try {
      const users = await getUsers();
      this.setState({
        users,
        loading: false,
        isInitialized: true,
      });
    } catch (error) {
      this.setState({
        hasLoadingError: true,
        loading: false,
      });
    }
  }

  render() {
    const {users, userId, loading, hasLoadingError, isInitialized} = this.state;
    return (
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title">Mate academy</h1>

            <div className="columns is-mobile">
              <div className="column">
                {!isInitialized ? (
                  <button
                    className={classNames('button', 'is-link', {
                      'is-loading': loading,
                    })}
                    onClick={this.loadUsers}
                  >
                    Load users
                  </button>
                ) : (
                  users.length > 0 ? (
                    <UsersTable
                      users={users}
                      selectedUserId={userId}
                      selectUser={(userId) => {
                        this.setState({userId});
                      }}
                    />
                  ) : 'No users yet'
                )}
              </div>
              {userId !== 0 && (
                <div className="column">
                  <UserInfo userId={userId}/>
                </div>

              )}
            </div>
            {hasLoadingError && <LoadingError/>}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
