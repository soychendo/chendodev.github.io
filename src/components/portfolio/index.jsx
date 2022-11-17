import React from "react";

const Portfolio = () => {
  return(
    <div className="container-menu">
    <div className="bartitle">
        <h1>Portafolio</h1>
     </div>
     <div className="grid-menu portfolio-mb">
        <div className="col-md-4 col-lg-4 mb-4">
            <div className="card">
                <img src="" className="card-img-top" alt="imagen-portfolio" />
                <div className="card-body">
                    <h2>cards</h2>
                    <p>Todos los proyectos alojados en github, son open source. de libre uso en general.</p>
                    <div className="button_portfolio">
                        <a href="https://github.com/<?php echo $data['github']; ?>" target="_blank" className="btn btn-chendo btn-block">Source</a>
                        <a href="https://<?php echo $data['demo']; ?>" className="btn btn-chendo btn-block">Demo</a>
                    </div>
                    <div className="button_portfolio">
                      <a href="page.php?id=<?php echo $data['id']; ?>" className="source-code btn btn-chendo btn-block">Source</a>
                      <a href="https://<?php echo $data['demo']; ?>" target="_blank" className="source-code btn btn-chendo btn-block">Demo</a>
                    </div>
                </div>
            </div>
        </div>
     </div>
 </div>
  );
}

export default Portfolio;
