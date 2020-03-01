import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Header from './Header';
import Main from './Search';
import Home from './Home';
import { UserProvider } from './UserContext';
import { Login, Logout} from './Auth'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      token: props.userData.token,
      username: props.userData.username,
      setUserData: (token, username) => this.setState({
        token: token,
        username: username
      }),
    };
  }

  renderProtectedComponent(ProtectedComponent) {
    if (this.state.username !== null) {
      return  (props) => <ProtectedComponent {...props} />;
    }
    else {
      return (props) => <Redirect to='/login' />;
    }
  }

  render() {
    return (
        <React.Fragment>
          <UserProvider value={this.state}>
            <Router>
            <React.Fragment>
                <Header />
      
                <Route path="/main" render={this.renderProtectedComponent(Main)} />
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Home} />
                <Route path="/logout" render={this.renderProtectedComponent(Logout)} />
                </React.Fragment>
            </Router>
          </UserProvider>
        </React.Fragment>
    );
  }
}

export default App;
