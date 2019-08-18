import miss from "./assets/miss.png" 
class Pokemon {
    constructor(data) {
      this.id = data.id;
      this.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      this.sprite = data.sprites.front_default? data.sprites.front_default : miss;
      this.type = data.types.map(
          typeEl => typeEl.type.name.charAt(0).toUpperCase() + typeEl.type.name.slice(1)
      )
      .join(", ");
    }
  }
  
  export default Pokemon;