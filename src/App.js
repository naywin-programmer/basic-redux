import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './Reducers/reducers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './View/Home'
import Hello from './View/Hello'

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/hello">Hello</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/hello">
            <Hello />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
