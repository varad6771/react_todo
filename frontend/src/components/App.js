import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../history';
import store from '../store';
import Header from './layout/Header';
import Dashboard from './todos/Dashboard';
import TodoDelete from './todos/TodoDelete';
import TodoEdit from './todos/TodoEdit';




class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/delete/:id' component={TodoDelete} />
            <Route exact path='/edit/:id' component={TodoEdit} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
