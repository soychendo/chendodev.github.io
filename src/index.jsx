/*-----------------------------------------------------------------------------------

    Name: Chendo Dev
    Theme URI: @chendodev
    Description: Chendo Dev - Web Site
    Author: @chendodev - chendo | developer && web designer
    Author URI: https://facebook.com/chendodev
    Github: https://github.com/chendodev
    Youtube: https://youtube.com/@chendodev

-----------------------------------------------------------------------------------*/
import React from 'react';
import ReactDom from "react-dom/client";
import App from '@components/App/';
import '@styles/style.scss';

const root = ReactDom.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
