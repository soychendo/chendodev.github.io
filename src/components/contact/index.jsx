import React, { useContext, useState } from "react";
import { GlobalContext } from "@context/GlobalContext";
import { useForm } from '@formspree/react';
import { getBrowser } from '@utils/check';
import Menu from "@components/menu";

import TelegramImage from '@images/telegram.svg';

const Contact = () => {
  const { input, setInput, onSubmit, handleChange } = useContext(GlobalContext);
  const [state, handleSubmit] = useForm("xvoyyzey", {data: {validated: e => onSubmit(e)}});

  if(state.succeeded) {
    setInput({ name: "", email: "", message: "" })
  }
  const succes = "Tu mensaje ha sido enviado correctamente";

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
                     <input type="text" spellCheck="false" id="name" name="name" value={input.name} onChange={handleChange} placeholder="Nombre" autoComplete="off" />
                  </div>
                  <div className="form-control" >
                     <input type="email" spellCheck="false" id="email" name="email" value={input.email} onChange={handleChange} placeholder="Email" autoComplete="off" />
                  </div>
                  <textarea name="message" spellCheck="false" id="message" value={input.message} onChange={handleChange} placeholder="Mensaje"></textarea>
                  <div className="messageAndSubmit">
                     <small className={state.succeeded ? "succes" : null}>{state.succeeded ? <>{succes}</> : null}</small>
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
