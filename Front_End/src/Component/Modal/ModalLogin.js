import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './ModalLogin.css';
import CLogin from '../Login/CLogin';
import CRegister from '../Register/CRegister';

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

export default class ModalLogin extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      value: '',
      loginOpened: false,
      signupOpened: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  openModal = modalType => () => {
    if (modalType === "login") {
      this.setState({
        loginOpened: true,
        signupOpened: false
      });
    } else if (modalType === "signup") {
      this.setState({
        loginOpened: false,
        signupOpened: true
      });
    }
  };
  closeModal = modalType => () => {
    if (modalType === "login") {
      this.setState({
        loginOpened: false
      });
    } else if (modalType === "signup") {
      this.setState({
        signupOpened: false
      });
    }
  };

  render() {
    const { loginOpened, signupOpened } = this.state;
    return (
      <div>
        <button className="closeButton" onClick={this.openModal}>Login</button>
        <Modal
          isOpen={loginOpened}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal("login")}
          style={customStyles}
          appElement={document.getElementById('app')}
          contentLabel="Example Modal"
        >
          {/* <h2 ref={subtitle => this.subtitle = subtitle}>Login</h2> */}
          <button className="crossButton" onClick={this.closeModal}><i className="fa fa-times-thin fa-2x" aria-hidden="true"></i> </button>
          <CLogin />
        </Modal>
      </div>
    );
  }
}

// ReactDOM.render(<ModalLogin />, appElement);