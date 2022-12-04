
import React, { useState, ReactNode } from 'react';
import { GlobalContext } from "@context/GlobalContext";

const GlobalProvider: React.FC<{}> = ({children}: { children?: ReactNode }) => {

const [menuBtn, setMenuBtn] = useState(false);
const [input, setInput] = useState({name: "", email: "", message: ""});

class Check {

  private name: string;
  private email: string;
  private message: string;

  constructor(name: string, email: string, message: string) {
    this.name = name;
    this.email = email;
    this.message = message;
  }
  public validate() {
    const nameValue = input.name.trim();
    const emailValue = input.email.trim();
    const messageValue = input.message.trim();
    let result = true;

    if (!nameValue) {
      this.msgError('!Ingrese un Nombre¡');
      result = false;
    }
    else if (!this.isEmail(emailValue) || emailValue === "") {
        this.msgError('!Ingrese un email correcto¡');
        result = false;
    }
    else if (!messageValue) {
      this.msgError('!Ingrese un Mensaje¡');
      result = false;
    }
    return result;
  }
  private msgError(message: string) {
    const small: HTMLElement | null = document.querySelector('small') ;

    if(small !== null) {
      small.innerText = message;
      setTimeout(() => {
        small.innerText = "";
      }, 5000);
    }
  }
  private isEmail(email: string) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
  }
}
let check = new Check(input.name, input.email, input.message);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setInput({
      ...input,
      [e.target.name]: value
    });
  }

  const onSubmit = (e: { preventDefault: () => void; }): void => {
    // we validate that everything is correct
    if(!check.validate()) {
      e.preventDefault();
      check.validate();
    }
  }

  const setMenu = (): void => {
    setMenuBtn(!menuBtn);
  }

  const valueContext = {
    setMenu,
    menuBtn,
    input,
    setInput,
    setMenuBtn,
    handleChange,
    onSubmit
  }

  return (
    <GlobalContext.Provider value={valueContext}>{children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider};


