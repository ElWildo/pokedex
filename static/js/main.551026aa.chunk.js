(window.webpackJsonppokedex=window.webpackJsonppokedex||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(6),r=n.n(i),c=(n(14),n(1)),l=n(2),s=n(4),u=n(3),p=n(5),h=(n(15),n(7)),m=(n(16),n(17),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={img:null},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.url).then(function(e){return e.json()}).then(function(t){return e.setState({style:{backgroundImage:"url("+t.sprites.front_default+")"}})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("button",{className:"poke-cell",style:this.state.style,onClick:function(){return e.props.handleOnClick(e.props.url)}})}}]),t}(a.Component)),d={API:"https://pokeapi.co/api/v2/pokemon"},f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleScroll=function(e){var t=r.a.findDOMNode(Object(h.a)(n)).getBoundingClientRect(),a=n.myRef.current.getBoundingClientRect();t.y+t.height>a.y+a.height&&!n.state.loading&&n.loadMore()},n.loadMore=function(){n.listSetter(),console.log(n.state.apiToCall)},n.listSetter=function(){n.setState({loading:!0}),fetch(n.state.apiToCall).then(function(e){return e.json()}).then(function(e){return n.setState({pokemonDisplayed:n.state.pokemonDisplayed.concat(e.results),apiToCall:e.next,loading:!1})}).catch(function(e){console.log(e)})},n.renderList=function(){return n.state.pokemonDisplayed.map(function(e){return o.a.createElement(m,{key:e.name,name:e.name,url:e.url,handleOnClick:n.props.handleOnClick})})},n.state={apiToCall:d.API+"?limit=10",pokemonDisplayed:[],loading:!1},n.myRef=o.a.createRef(),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.listSetter(),this.scrollListener=r.a.findDOMNode(this).addEventListener("scroll",function(t){e.handleScroll(t)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"poke-list"},this.renderList(),o.a.createElement("div",{ref:this.myRef}))}}]),t}(a.Component);n(18);function k(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}var v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.pokemon,t="ID: #"+e.id+" "+e.name,n="Type: "+e.type;return o.a.createElement("section",{className:"detail-view"},o.a.createElement("div",{className:"sprite-wrapper"},k(e)?null:o.a.createElement("img",{src:e.sprite,className:"sprite-image",alt:"sprite"})),o.a.createElement("div",{className:"data-wrapper"},o.a.createElement("h1",{className:"data-name"},k(e)?null:t),o.a.createElement("p",{className:"data-char"},k(e)?null:n)))}}]),t}(a.Component),O=function e(t){Object(c.a)(this,e),this.id=t.id,this.name=t.name.charAt(0).toUpperCase()+t.name.slice(1),this.sprite=t.sprites.front_default,this.type=t.types.map(function(e){return e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1)}).join(", ")},y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleOnClick=function(t){fetch(t).then(function(e){return e.json()}).then(function(t){var n=new O(t);e.setState({pokemon:n})}).catch(function(e){return console.log(e)})},e.state={pokemon:{}},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,{handleOnClick:this.handleOnClick}),o.a.createElement(v,{pokemon:this.state.pokemon}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.551026aa.chunk.js.map