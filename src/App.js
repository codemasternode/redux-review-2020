import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home'
import UsersPage from './pages/UsersPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/users" component={UsersPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
