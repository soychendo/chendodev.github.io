import React from "react";
import Master from "@images/master.jpg";

const Header = () => {
  return(
    <header>
    <div className="navigation">
        <div className="container">
            <div className="row-cont">
                <div className="col-img">
                    <div className="pulse">
                        <a href="/"><img src={Master} alt="Master" /></a>
                        <span>chendo</span>
                    </div>
                </div>
                <div className="col-menu">
                    <div className="nav">
                        <a className="nav-link" href="/">Home</a>
                        <a className="nav-link" href="/about">Sobre mi</a>
                        <a className="nav-link" href="/contact">Contacto</a>
                        <a className="nav-link" href="/portfolio">Portafolio</a>
                        <a className="nav-link" href="#">Blog</a>
                    </div>
                </div>
                <div className="menu-social">
                    <a href="https://github.com/chendoio" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.youtube.com/chendoio" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.facebook.com/chendomen" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/chendoio/" target="_blank"><i className="fab fa-instagram"></i></a>
                    <footer>Copyright @ 2022</footer>
                </div>
            </div>
        </div>
    </div>
</header>
  );
}

export default Header;
