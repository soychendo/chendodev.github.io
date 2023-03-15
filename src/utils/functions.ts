import type { MouseEventHandler } from "react"

export const dragStart: MouseEventHandler<HTMLElement> = () => {
  document.addEventListener('dragstart', (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    if(element.tagName == 'IMG')
      event.preventDefault();
  })
}

// Fixed problem touchstart in mobile
const goToLink = (url: string) => {
  setTimeout(() => {
    window.open(url, "_blank");
  }, 500);
}

export { goToLink };
