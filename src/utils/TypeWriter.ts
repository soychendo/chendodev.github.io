/*-----------------------------------------------------------------------------------

    Name: Chendo Dev
    Theme URI: @chendodev
    Description: Chendo Dev - Web Site
    Author: @chendodev - chendo | developer && web designer
    Author URI: https://facebook.com/chendodev
    Github: https://github.com/chendodev
    Youtube: https://youtube.com/@chendodev

-----------------------------------------------------------------------------------*/

// Type text animated
class TypeWriter {

  private txtElement: HTMLElement;
  private words: string[];
  private txt: string;
  private wordIndex: number;
  private wait: number;
  private isDeleting: boolean;

  constructor(txtElement: HTMLElement, words: string[], wait: number = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait.toString(), 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">&nbsp;${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init App
const init = () => {
  const txtElement = document.querySelector('.txt-type') as HTMLElement;
  const words = JSON.parse(txtElement.getAttribute('data-words') || '[]') as string[];
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait ? parseInt(wait.toString(), 10) : undefined);
};

export { init };
