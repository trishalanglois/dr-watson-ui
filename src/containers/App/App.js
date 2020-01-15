import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/Header';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import ChatBox from '../ChatBox/ChatBox';
import { removeUser, hasErrored } from '../../actions';
import { endConversation } from '../../apiCalls';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   messages: []
    // }
  }

  // addMessage = (message, isUser) => {
  //   const { messages } = this.state;
  //   this.setState({ messages: [...messages, { message, isUser }]});
  // }

  clearMessages = () => {
    this.setState({ messages: [] });
  }

  signOut = async () => {
    try {
      await endConversation();
      this.props.removeUser();
      this.clearMessages();
    } catch({ message }) {
      this.props.hasErrored(message);
    }
  }

  render() {
    const { user } = this.props;
    // const { messages } = this.state;
    return (
      <div className="App">
        <Header signOut={this.signOut} />
        {!user && <WelcomeModal />}
        {user && <ChatBox />}
      </div>
    );
  }
}

export const mapStateToProps = ({ user }) => ({
  user,
});

export const mapDispatchToProps = dispatch =>  bindActionCreators({
  removeUser,
  hasErrored
 }, dispatch);

// Updates to that local state are handled by the addMessage and clearMessages methods. We would like you to convert this over to the Redux global store. Convert the methods to actions and add a new reducer called messages and connect them to the components that need access to that data/functionality.

export default connect(mapStateToProps, mapDispatchToProps)(App);
