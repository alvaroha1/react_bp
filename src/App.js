import React, { Component } from 'react';
import UsersForm from './Components/UsersForm';
import UsersList from './Components/UsersList';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  state = {
    users: {},
    restaurants: {},
  };

  static propTypes = {
    users: PropTypes.object,
    restaurants: PropTypes.object,
  }
  render() {
    return (
      <div className="App">
        <div className="Users">
          <h2>Users</h2>
          <UsersForm />
          <UsersList />
        </div>
      </div>
    );
  }
}

export default App;
