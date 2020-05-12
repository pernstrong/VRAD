import React from 'react';
import './App.css';

import SignIn from '../SignIn/SignIn'
import AreasContainer from '../AreasContainer/AreasContainer'
import ListingsContainer from '../ListingsContainer/ListingsContainer'
import Favorites from '../Favorites/Favorites'
import Header from '../Header/Header'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: ''
    }
  }

  setUser = newUser => {
    this.setState({user: newUser})
    console.log(this.state.user)
  }
  render() {
    return (
      <div className="App">
        <Header userName={this.state.user.name} />
        <SignIn setUser={this.setUser}/>
      </div>
    );
  }
}

export default App;


