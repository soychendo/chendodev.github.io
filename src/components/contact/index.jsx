import React from "react"

const Contact = () => {
  return(
    <div className="container-menu">
     <div className="bartitle">
        <h1>Contacto</h1>
     </div>
     <div className="grid-menu">
         <div className="col-md-12">
            <div className="container-contact">
               <span>Tienes un proyecto en mente, y no sabes por dónde empezar?<br />
               Puedes escribirme directamente:<br /></span><br />
               <span className="correo"><i className="fas fa-envelope icono"></i> chendoec@live.com<br /></span>
               <div className="cont-text">
                  <div className="cont-svg">
                     <img src="src/image/telegram.svg" className="img-svg" alt="svg-telegram" />
                  </div>
                  <a href="https://t.me/chendoec" target="_blank">@chendoec</a>
               </div><br />
               <p>Sientete libre de preguntar cuanto necesites. Te contestaré lo antes posible.<br />
               <span>(eso suele ser en un plazo de entre 24-48 horas laborables!)</span></p>
            </div>
         </div>
         <div className="col-md-12">
            <div className="cont-form">
               <form action="includes/send.php" method="POST" id="form">
                  <div className="form-control" >
                     <input type="text" spellcheck="false" id="name" name="name" placeholder="Nombre" autocomplete="off" required />
                  </div>
                  <div className="form-control" >
                     <input type="email" spellcheck="false" id="email" name="email" placeholder="Email" autocomplete="off" required />
                  </div>
                  <textarea name="message" spellcheck="false" id="message" placeholder="Mensaje" required></textarea>
                  <div className="messageAndSubmit">
                     <small></small>
                     <button type="submit" className="btn btn-chendo btn-block mb-4">Enviar</button>
                  </div>
               </form>
            </div>
         </div>
     </div>
    </div>
  );
}

export default Contact;
