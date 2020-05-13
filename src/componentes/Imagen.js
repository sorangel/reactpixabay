import React from "react";
import "./imagen.css";

const Imagen = props => {
  const { webformatURL, likes, tags, views } = props.imagen;

  return (
    <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-4 imagen">
      <div className="card">
        <img src={webformatURL} alt={tags}  className="card-img-top"/>
        <div className="card-body">
          <p className="card-text">{likes} Me gusta</p>
          <p className="card-text">{views} Vistas</p>

          <a
            href={webformatURL}
            target="_blank"
            className="btn btn-primary
            btn-block"
          >
            Ver imagen
          </a>
        </div>
      </div>
    </div>
  );
};
export default Imagen;
