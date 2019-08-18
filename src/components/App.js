import React, { Component } from 'react';
import './styles/App.css';
import PokeList from './pokelist'
import DetailView from './detailview'
import Pokemon from '../pokemon'


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon : {}
    };
  }

  handleOnClick = (url) =>{
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick}/>
        <DetailView pokemon={this.state.pokemon}/>
      </div>
    );
  }
}


export default App;
