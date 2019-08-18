import React, { Component } from 'react';
import './styles/pokelist.css';
import PokeCell from './pokecell'
import global from "./global";
import ReactDOM from 'react-dom';

class PokeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiToCall: global.API + "?limit=10",
            pokemonDisplayed: [],
            count: 0,
            tot: 0,
            loading: false
        };
        this.myRef = React.createRef();
    }

    handleScroll = (e) => {
        var el =  ReactDOM.findDOMNode(this).getBoundingClientRect()
        var lastLi = this.myRef.current.getBoundingClientRect()
        if (el.y + el.height > lastLi.y + lastLi.height && !this.state.loading && this.state.count<this.state.tot) {
            this.loadMore();
        }
    };

    loadMore = () => {
        this.listSetter()
        console.log(this.state.apiToCall)
    }

    listSetter = () => {
        this.setState({
            loading: true
        })
        fetch(this.state.apiToCall)
            .then(response => response.json())
            .then(data => this.setState({
                pokemonDisplayed: this.state.pokemonDisplayed.concat(data.results),
                apiToCall: data.next,
                loading: false,
                count: this.state.count + data.results.length,
                tot: data.count
            }))
            .catch(function (error) { console.log(error) })
    }

    renderList = () => {
        var pokemons = this.state.pokemonDisplayed
        return pokemons.map(
            pokemon => <PokeCell key={pokemon.name} name={pokemon.name} url={pokemon.url} handleOnClick={this.props.handleOnClick} />
        )
    }

    componentDidMount() {
        this.listSetter()
        this.scrollListener =  ReactDOM.findDOMNode(this).addEventListener("scroll", e => {
            this.handleScroll(e);
          });
    }

    render() {
        return (
            <div className="poke-list">
                {this.renderList()}
                <div ref={this.myRef}/>
            </div>
        )
    }
}


export default PokeList;