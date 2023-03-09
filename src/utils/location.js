
// Fixed problem touchstart in mobile
const goToLink = (url) => {
  setTimeout(() => {
    window.open(url, "_blank");
  }, 500);
}

export { goToLink };
