import React, { Component } from 'react';
import './styles/pokecell.css';


class PokeCell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: null,
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({
        style: {
          backgroundImage: "url(" + data.sprites.front_default + ")"
        }
      }))
      .catch(function (error) { console.log(error) })
  }

  render() {
    return <button className="poke-cell" style={this.state.style} onClick={() => this.props.handleOnClick(this.props.url)}></button>
  }
};


export default PokeCell;