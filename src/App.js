import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import HomePage from './pages/Home'
import UsersPage from './pages/UsersPage'
import store from './redux/index'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/users" component={UsersPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
