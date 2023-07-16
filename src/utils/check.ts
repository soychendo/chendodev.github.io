/*-----------------------------------------------------------------------------------

    Name: Chendo Dev
    Theme URI: @chendodev
    Description: Chendo Dev - Web Site
    Author: @chendodev - chendo | developer && web designer
    Author URI: https://facebook.com/chendodev
    Github: https://github.com/chendodev
    Youtube: https://youtube.com/@chendodev

-----------------------------------------------------------------------------------*/
// check
const getBrowser = () => {
  let ieCheck = /Edg/.test(navigator.userAgent);

  ieCheck
    ? document
        .querySelectorAll('input')
        .forEach((input) => input.setAttribute('autoComplete', 'nope'))
    : null;
};

export { getBrowser };
