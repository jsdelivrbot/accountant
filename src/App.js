import React, { Component } from 'react';
import user from './model/user';

import Loading from './components/loading/Loading';
import Menu from './components/mainMenu/Menu';
import Page from './components/Page';
import Introduction from './components/introduction/Introduction';

class App extends Component {

  state = {
    loggedIn: null,
    msg: ''
  };

  componentDidMount() {
    user.isUserLoggedIn()
      .then((response) => {
        this.setState({ loggedIn: response });
      });
  }

  loginSuccess() {
    this.setState({ loggedIn: true });
  }
  logout(msg) {
    this.setState({
      loggedIn: false,
      msg: msg
    });
  }

  renderApp() {
    let appContent;

    if (this.state.loggedIn === null) {
      appContent = <Loading />;
    }
    else if (this.state.loggedIn) {
      appContent =
        <React.Fragment>
          <Menu logout={this.logout.bind(this)} />
          <Page />
        </React.Fragment>;
    }
    else {
      appContent = 
        <Introduction
          handleLogin={this.loginSuccess.bind(this)}
          msg={this.state.msg}
        />;
    }

    return appContent;
  }

  render() {
    return (
      this.renderApp()
    );
  }
}

export default App;
