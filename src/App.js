import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ProgressList from './components/ProgressList';
import ItemModal from './components/ItemModel';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
          <ItemModal/>
          <ProgressList/>
        </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
