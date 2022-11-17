/*-----------------------------------------------------------------------------------

    Name: Chendo
    Theme URI: @chendoio
    Description: Web Site - Portfolio - Chendo
    Author: @chendoio - chendo : developer and web designer
    Author URI: http://chendo.io
    Github: https://github.com/chendoio
    Youtube: https://youtube.com/chendoio

-----------------------------------------------------------------------------------*/
// btn media
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navigation');
const opa = document.querySelector('.bartitle h1');
// click button
btn.addEventListener('click', () => {
  
    if(nav.style.visibility == "visible") {
        nav.style.visibility = null;
        opa.classList.remove('mobile-btn');
    } else {
        nav.style.visibility = 'visible';
        opa.classList.add('mobile-btn');
    }
});