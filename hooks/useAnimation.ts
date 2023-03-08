
const useAnimation = (element: string) => {
  const animateElement = document.querySelectorAll(element) as unknown as HTMLElement[];
  animateElement.forEach( animate => {
    animate.style.setProperty('--anima', 'paused');
    animate.classList.add('icon')
    setTimeout(() => animate.style.setProperty('--anima', null), 100);
  });
}

export {useAnimation};
