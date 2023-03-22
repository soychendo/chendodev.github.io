
import { useState } from 'react';
import type {  FormEventHandler, ChangeEventHandler } from 'react';
import { GlobalContext } from "@context/GlobalContext";
import { GlobalProviderTypes, ContactForm } from './types';
import axios from 'axios';

const initialState = {
  name: "",
  email: "",
  message: ""
}

const GlobalProvider = ({children}: GlobalProviderTypes ) => {

  const [menuBtn, setMenuBtn] = useState(false);
  const [input, setInput] = useState<ContactForm>(initialState);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  class Check {

    private name: string;
    private email: string;
    private message: string;

    constructor(name: string, email: string, message: string) {
      this.name = name;
      this.email = email;
      this.message = message;
    }
    protected validate() {
      const nameValue = this.name.trim();
      const emailValue = this.email.trim();
      const messageValue = this.message.trim();
      let result = true;

      if (!nameValue) {
        this.messageNotification('Enter a name');
        result = false;
      } else if (!this.regexName(nameValue)) {
        this.messageNotification('The "Name" field only accepts letters and spaces.');
        result = false;
      }
      if (!emailValue) {
          this.messageNotification('Enter an email');
          result = false;
      } else if (!this.isEmail(emailValue)) {
          this.messageNotification('The "Mail" field contains an invalid format.');
          result = false;
      }
      if (!messageValue) {
        this.messageNotification('Enter a Message');
        result = false;
      } else if (!this.regexMessage(messageValue)) {
          this.messageNotification('The "Message" field only accepts letters and spaces.');
          result = false;
      }
      return result;
    }
    private messageNotification(message: string) {
      const small: HTMLElement | null  = document.querySelector('small') ;
      small!.innerHTML = message;
      setTimeout(() => {small!.innerText = ""; }, 3000);
    }
    private regexName(name: string): boolean {
      return /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(name);
    }
    private isEmail(email: string): boolean {
      return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
    }
    private regexMessage(message: string): boolean {
      return /^.{1,255}$/.test(message);
    }
    protected onSubmit: FormEventHandler<HTMLFormElement> | undefined = async (event) =>  {
      event.preventDefault();
      try {
        if(this.validate()) {
          setLoading(true)
          axios.defaults.headers.post['Content-Type'] = 'application/json';
          await axios.post('https://formsubmit.co/ajax/chendodev@gmail.com', {
            name: this.name,
            email: this.email,
            message: this.message
          })
          setSuccess(true)
          this.messageNotification('Tu mensaje ha sido enviado correctamente');
          setLoading(false)
          setTimeout(() => {
            window.location.href = 'https://chendo.dev'
          }, 3000);
        } else {
          setSuccess(false)
          throw new Error("Error from send email");
        }
      } catch (error) {
        console.log(error)
      }
    }
    protected onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      const { name, value } = event.target;

      setInput({
        ...input,
        [name]: value
      })
    }

  }
  const { name, email, message } = input;
  let check = new Check(name, email, message);

  const valueContext = {
    setMenuBtn,
    menuBtn,
    setInput,
    success,
    loading,
    check,
    name,
    email,
    message
  }

  return (
    <GlobalContext.Provider value={valueContext}>
      {children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider};
