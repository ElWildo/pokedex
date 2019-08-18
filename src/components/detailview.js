import React, { Component } from 'react';
import './styles/detailview.css';

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var pokemon = this.props.pokemon
    var dataname = "ID: #" + pokemon.id + " " + pokemon.name
    var datatype = "Type: " + pokemon.type
    return (
      <section className="detail-view">
        <div className='sprite-wrapper'>
          {!isEmpty(pokemon) ?
            <img src={pokemon.sprite} className='sprite-image' alt="sprite" />
            : null
          }
        </div>
        <div className='data-wrapper'>
          <h1 className='data-name'>{!isEmpty(pokemon) ? dataname : null}</h1>
          <p className="data-char">{!isEmpty(pokemon) ? datatype : null}</p>
        </div>
      </section>
    )
  }

}

export default DetailView;