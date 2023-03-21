import React from "react"
import { Bartitle } from "@components/Bartitle";

const About = (): JSX.Element => {

  const about = "Sobre Mi";

  return(
  <main className="container-menu">
    <Bartitle textBar={about} />
    <div className="grid-menu mb-4">
      <div className="col-md-6 pd-l">
          <div className="col-content">
            <span>Hola!</span>
            <p>Soy chendo, Diseñador Gráfico, Desarrollador Web, Motivador & Especialista en Presencia Online.</p>
            <p>Durante varios años me dedicaba a la creación de diseños para Windows. Dar solución a problemas de sistemas informáticos, hardware y software.</p>
            <p>En el 2009, los sitios web comenzaron a llamarme la atención. que incluso pude crear mi primer sitio web, con html y css.</p><p>&nbsp;</p>
            <p><i>"Cuando algo realmente te apasiona. encuentras la manera de llevarlo acabo, sin importar cuanto tiempo te tarde."</i></p>
          </div>
      </div>
      <div className="col-md-6 pd-l">
        <div className="col-content">
          <span>Quien soy...</span>
          <p>Mi nombre real es Jorge, pero todos me conocen como Chendo… Tengo 33 años. Nací el 19 de enero de 1990 en la mitad del mundo, Ecuador.</p>
          <p>Mis colores favoritos  son: rojo y negro. Número de la suerte, 7. Signo Capricornio.</p>
          <p>Sin duda alguna, si hay algo que disfruto tanto. es ponerme el casco, subirme a mi moto y olvidarme de los problemas.
              Viajar, conocer a buenas personas, y poner en papel lo que siento.</p>
          <p>La música, es una de mis pasiones favoritas. Ella me inspira, con ella vuelvo a vivir. Podría decir que ella vive conmigo desde que tengo memoria, o tal vés, mucho antes.</p>
        </div>
      </div>
      <span className="line"></span>
      <div className="col-md-6 pd-l">
        <div className="development pt-4">
          <span>Habilidades y Técnicas</span>
          <span><i className="fa fa-wrench icono"></i> Desarrollo</span>
          <span>Habilidades:</span>
          <div className="skill__separate">
            <ul className="mb-4">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Sass/Less</li>
                <li>Webpack</li>
                <li>Git/Github</li>
                <li>JavaScript</li>
            </ul>
            <ul className="skills mb-4">
                <li>React</li>
                <li>NodeJs</li>
                <li>Express</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>SQL</li>
            </ul>
          </div>
          <span>Patrones y Técnicas</span>
          <ul className="patterns-techniques mb-4">
            <li>Programación Orientada a Objetos</li>
            <li>MVC</li>
            <li>SEO</li>
            <li>Técnicas de Rendimiento</li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 pd-l mb-4">
          <div className="design pt-4">
            <span><i className="fa fa-palette icono"></i> Diseño</span>
            <span>Herramientas:</span>
            <ul className="skill__design mb-4">
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
            </ul>
            <p className="mb-4">Con la experiencia que he ganado, puedo crear diseños fiables.
                Ahora me centro más en el desarrollo, pero puedo construir cualquier tipo de idea.
            </p>
          </div>
      </div>
    </div>
  </main>
  );
}

export default About;

