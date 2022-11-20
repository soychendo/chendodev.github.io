import React, { useContext } from "react"
import { useForm } from '@formspree/react';
import { getBrowser } from '@utils/check';
import Menu from "@components/menu";

import TelegramImage from '@images/telegram.svg';

const Contact = () => {
  const [state, handleSubmit] = useForm("xvoyyzey");

  if(state.succeeded) {
    return window.location.href = "/contact";
  }

  return(
    <div onLoad={getBrowser} className="container-menu">
     <div className="bartitle">
        <h1>Contacto</h1>
        <Menu />
      </div>
     <div className="grid-menu">
         <div className="col-md-12 pd-l">
            <div className="container-contact">
               <span>Tienes un proyecto en mente, y no sabes por dónde empezar?<br />
               Puedes escribirme directamente:<br /></span><br />
               <span className="correo"><i className="fas fa-envelope icono"></i> chendoec@live.com<br /></span>
               <div className="cont-text">
                  <div className="cont-svg">
                     <img src={TelegramImage} className="img-svg" alt="svg-telegram" />
                  </div>
                  <a href="https://t.me/chendodev" target="_blank">@chendodev</a>
               </div><br />
               <p>Sientete libre de preguntar cuanto necesites. Te contestaré lo antes posible.<br />
               <span>(eso suele ser en un plazo de entre 24-48 horas laborables!)</span></p>
            </div>
         </div>
         <div className="col-md-12 pd-l">
            <div className="cont-form">
               <form onSubmit={handleSubmit} method="POST" id="form">
                  <div className="form-control" >
                     <input type="text" spellCheck="false" id="name" name="name" placeholder="Nombre" autoComplete="off" required />
                  </div>
                  <div className="form-control" >
                     <input type="email" spellCheck="false" id="email" name="email" placeholder="Email" autoComplete="off" required />
                  </div>
                  <textarea name="message" spellCheck="false" id="message" placeholder="Mensaje" required></textarea>
                  <div className="messageAndSubmit">
                     <small></small>
                     <button type="submit" disabled={state.submitting} className="btn btn-chendo btn-block mb-4">Enviar</button>
                  </div>
               </form>
            </div>
         </div>
     </div>
    </div>
  );
}

export default Contact;
