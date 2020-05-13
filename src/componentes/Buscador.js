import React, { Component} from "react";


export default class Buscador extends Component {
  busquedaRef = React.createRef();
  obtenerDatos = e => {
    e.preventDefault();

    //tomamos el valor del input
    this.props.datosBusqueda(this.busquedaRef.current.value);
    //lo enviamos al componente principal
  };

  render() {
    return (
      <form >
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca tu imagen.ejemplo:Futbol"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Buscar..."
              onClick={this.obtenerDatos}
            />
          </div>
        </div>
      </form>
    );
  }
}
