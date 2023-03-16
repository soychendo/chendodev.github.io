
import { useState } from 'react';
import type {  MouseEventHandler, ChangeEventHandler } from 'react';
import { GlobalContext } from "@context/GlobalContext";
import { useForm } from '@formspree/react';
import { GlobalProviderTypes, ContactForm } from './types';

const initialState = {
  name: "",
  email: "",
  message: ""
}

const GlobalProvider = ({children}: GlobalProviderTypes ) => {

const [menuBtn, setMenuBtn] = useState(false);
const [input, setInput] = useState<ContactForm>(initialState);
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
      this.messageNotification('!Ingrese un Nombre¡');
      result = false;
    }
    else if (!this.isEmail(emailValue) || !emailValue) {
        this.messageNotification('!Ingrese un email correcto¡');
        result = false;
    }
    else if (!messageValue) {
      this.messageNotification('!Ingrese un Mensaje¡');
      result = false;
    }
    else if(nameValue && emailValue && messageValue) {
      this.messageNotification('Tu mensaje ha sido enviado correctamente');
      setSuccess(true);
    }
    return result;
  }
  public messageNotification(message: string) {
    const small: HTMLElement | null  = document.querySelector('small') ;
    small!.innerHTML = message;
    setTimeout(() => {small!.innerText = ""; }, 5000);
  }
  private isEmail(email: string): boolean {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
  }
}
let check = new Check(input.name, input.email, input.message);

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const value = target.value;
    setInput({
      ...input,
      [target.name]: value
    });
  }
  const onSubmit: MouseEventHandler<HTMLButtonElement> = async (event) =>  {
    // Validating input data
    event.preventDefault();
    try {
      !check.validate()
      ? (check.validate(), setSuccess(false))
      : (setInput({name: "", email: "", message: ""}));
    } catch (error) {
      console.log(error)
    }
  }

  const valueContext = {
    setMenuBtn,
    menuBtn,
    input,
    state,
    success,
    onSubmit,
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


