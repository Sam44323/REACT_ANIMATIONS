import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import { TransitionGroup } from 'react-transition-group';

class App extends Component {
  state = {
    showModal: false,
  };

  openModalHandler = () => {
    this.setState({ showModal: true });
  };

  closeModalHandler = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className='App'>
        <h1>React Animations</h1>
        <Modal show={this.state.showModal} closed={this.closeModalHandler} />
        {this.state.showModal ? <Backdrop show /> : null}
        <button className='Button' onClick={this.openModalHandler}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
