import React from "react";
import { Link } from 'react-router-dom';

const Description = () => {
  return (
    <div className="col-md-6 pd-l">
      <div className="col-content">
        <div className="container-type"><br />
          <span className="hello">Hola,</span>
          <small>mi nombre es Chendo</small>
          <h2>I Am<span className="txt-type" data-wait="3000" data-words='["Developer", "Designer", "Freelancer"]'></span></h2>
          <p>Con más de 10 años de experiencia, puedo crear, diseñar y desarrollar tu presencia online, llevando tu proyecto al siguiente nivel.</p>
          <div className="btn_home">
            <Link to="/portfolio" className="btn btn-chendo btn-block mb-4">Portafolio</Link>
            <a
              href="mailto:chendoec@live.com"
              aria-label="Enchufe Virtual"
              target="_blank"
              className="btn btn-chendo btn-ev btn-block mb-4">
                Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Description };
