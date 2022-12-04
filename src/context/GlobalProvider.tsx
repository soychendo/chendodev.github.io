
import React, { useState, ReactNode } from 'react';
import { GlobalContext } from "@context/GlobalContext";
import { useForm } from '@formspree/react';

const GlobalProvider: React.FC<{}> = ({children}: { children?: ReactNode }) => {

const [menuBtn, setMenuBtn] = useState(false);
const [input, setInput] = useState({name: "", email: "", message: ""});
const [state, handleSubmit] = useForm("meqdyjel"); //!! Important: You must create an account in formspree.io and generate your ID.
const [success, setSuccess] = useState(false);

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
    const nameValue = this.name.trim();
    const emailValue = this.email.trim();
    const messageValue = this.message.trim();
    let result = true;

    if (!nameValue) {
      this.msgError('!Ingrese un Nombre¡');
      result = false;
    }
    else if (!this.isEmail(emailValue) || !emailValue) {
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

  const onSubmit = async (e: { preventDefault: () => void; }): Promise<void> =>  {
    // Validating input data
    e.preventDefault();
    try {
      !check.validate()
      ? (check.validate(), setSuccess(false))
      : (setInput({name: "", email: "", message: ""}), setSuccess(true));
    } catch (error) {
      console.log(error)
    }
  }
  const setMenu = (): void => {
    setMenuBtn(!menuBtn);
  }

  const valueContext = {
    setMenu,
    menuBtn,
    input,
    state,
    success,
    onSubmit,
    setMenuBtn,
    handleSubmit,
    handleChange,
  }

  return (
    <GlobalContext.Provider value={valueContext}>
      {children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider};


