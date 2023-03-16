import type { MouseEventHandler } from "react"

export const dragStart: MouseEventHandler<HTMLElement> = (): void => {
  document.addEventListener('dragstart', (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    if(element.tagName == 'IMG')
      event.preventDefault();
  })
}
// Fixed problem touchstart in mobile
export const goToLink = (url: string): void => {
  setTimeout(() => {
    window.open(url, "_blank");
  }, 500);
}
export const onVisibility = (): void => {
  const cards = document.querySelectorAll('.Card') as NodeListOf<HTMLDivElement>;
  setTimeout(() => {
    cards.forEach(card => {
      card.style.visibility = 'visible';
    })
  }, 500);
}
