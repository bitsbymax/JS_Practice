import { Route, Switch } from 'react-router-dom';
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css';
import {MainNavigation} from "./components/MainNavigation";
import {HomePage} from "./pages/HomePage";
import {AboutPage} from "./pages/AboutPage";
import {TodosPage} from "./pages/TodosPage";
import {TodoPage} from "./pages/TodoPage";

const App = () => {
  return (
    <>
      <MainNavigation />

      <section className="section">
        <div className="container">
          <h1 className="title">List of todos</h1>

          <div className="columns">
            <Route path="/todos/:todoId">
              <div className="column">
                <TodoPage />
              </div>
            </Route>
            <div className="column">
              <Switch>
                <Route path="/todos/:todoId?" component={TodosPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/" exact component={HomePage} />

                <p>Not found</p>
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
