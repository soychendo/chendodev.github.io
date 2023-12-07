import React from "react";

const SocialMedia = () => {

  return (
    <div className="col-md-6 pd-l">
      <div className="col-content">
        <div className="content__img">
          <div className="content-top-icon">
            <div className="cirdown">
              <a href="https://linkedin.com/in/chendodev" aria-label="linkedin" target="_blank"><i className="fab fa-linkedin-in icono"></i></a>
            </div>
            <div className="cirdown">
              <a href="https://behance.net/chendo" aria-label="behance" target="_blank"><i className="fab fa-behance icono"></i></a>
            </div>
          </div>
          <div className="content-med-icon">
            <div className="cirdown">
              <a href="https://twitter.com/chendodev" aria-label="twitter" target="_blank"><i className="fab fa-twitter icono"></i></a>
            </div>
            <div className="cirdown">
              <a href="https://github.com/chendodev" aria-label="github" target="_blank"><i className="fab fa-github-alt icono"></i></a>
            </div>
            <div className="cirdown">
              <a href="https://facebook.com/enchufevirtual" aria-label="facebook" target="_blank"><i className="fab fa-facebook-f icono"></i></a>
            </div>
          </div>
          <div className="content-bottom-icon mb-4">
            <div className="cirdown">
              <a href="https://tiktok.com/@chendodiesel" aria-label="tiktok" target="_blank"><i className="fab fa-tiktok icono"></i></a>
            </div>
            <div className="cirdown">
              <a href="https://codepen.io/chendodev" aria-label="codepen" target="_blank"><i className="fab fa-codepen icono"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SocialMedia };
