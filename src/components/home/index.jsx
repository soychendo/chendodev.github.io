import React from "react"

const Home = () => {
  return(
    <main class="container-menu">
      <div class="map"><img src="src/image/mapa.jpg" alt="" /></div>
        <div class="bartitle">
            <h1>Home</h1>
        </div>
        <div class="grid-menu mb-4">
            <div class="col-md-6">
                <div class="col-content">
                  <div class="container-type"><br />
                      <span>Hola,</span>
                      <small>mi nombre es Chendo</small>
                      <h2>I Am<span class="txt-type" data-wait="3000" data-words='["Developer", "Designer", "Freelancer"]'></span></h2>
                      <p>Con más de 10 años de experiencia, puedo crear, diseñar y desarrollar tu presencia online, llevando tu proyecto al siguiente nivel.</p>
                      <div class="btn_home">
                        <a href="/portfolio" class="btn btn-chendo btn-block mb-4">Portafolio</a>
                        <a href="./src/cv-developer-es.pdf" download class="btn btn-chendo btn-cv btn-block mb-4">Cv</a>
                      </div>
                  </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="col-content">
                  <div class="content__img">
                      <div class="content-top-icon">
                        <div class="cirdown">
                            <a href="https://linkedin.com/in/chendoio" target="_blank"><i class="fab fa-linkedin-in icono"></i></a>
                        </div>
                        <div class="cirdown">
                            <a href="https://behance.net/chendo" target="_blank"><i class="fab fa-behance icono"></i></a>
                        </div>
                      </div>
                      <div class="content-med-icon">
                        <div class="cirdown">
                            <a href="https://twitter.com/chendoio" target="_blank"><i class="fab fa-twitter icono"></i></a>
                        </div>
                        <div class="cirdown">
                            <a href="https://github.com/chendoio" target="_blank"><i class="fab fa-github-alt icono"></i></a>
                        </div>
                        <div class="cirdown">
                            <a href="https://facebook.com/enchufevirtual" target="_blank"><i class="fab fa-facebook-f icono"></i></a>
                        </div>
                      </div>
                        <div class="cirdown">
                            <a href="https://tiktok.com/@chendoio" target="_blank"><i class="fab fa-tiktok icono"></i></a>
                        </div>
                        <div class="cirdown">
                            <a href="https://codepen.io/chendoio" target="_blank"><i class="fab fa-codepen icono"></i></a>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </main>

  );
}

export default Home;

