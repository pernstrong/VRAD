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
      user: '',
      areas: []
    }
  }

  setUser = newUser => {
    this.setState({user: newUser})
    console.log(this.state.user)
  }

  componentDidMount() {
    fetch('https://vrad-api.herokuapp.com/api/v1/areas')
      .then(response => response.json())
      .then(areaData => {
        const promises = areaData.areas.map(area => {
          let url = `https://vrad-api.herokuapp.com${area.details}`
          return fetch(url)
          .then(response => response.json())
          .then(areaDetails => areaDetails)
        
      })
      return Promise.all(promises)
    })
    .then(resolvedData => this.setState({areas: resolvedData}))
    .catch(err => console.error(err))
}

componentDidUpdate() {
  console.log(this.state.areas)
}

//   handleApiData = (data) => {
//     const promises = data.areas.map(area => {
//       let url = `https://vrad-api.herokuapp.com${area.details}`
//       fetch(url)
//       .then(response => response.json())
//       .then(data => data)
//       .catch(err => console.error(err))  
//       return   
//     })
// ``
//   }

  fetchAreaDetails = (url) => {
    // fetch(url)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(err => console.error(err))
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


