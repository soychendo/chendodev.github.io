import React, { useContext } from "react";
import { GlobalContext } from "@context/GlobalContext";
import { getBrowser } from '@utils/check';
import { ContextProps } from "@context/types";
import { Input } from "@components/contact/Input";

export const Form = () => {
  const { success, check, name, email, message } = useContext<ContextProps>(GlobalContext);

  return (
    <form onSubmit={check.onSubmit} onLoad={getBrowser} method="POST" id="form">
      <textarea name="message" value={message} onChange={check.onChange} placeholder="Mensaje"></textarea>
      <div className="form-control" >
        <Input  name="name" value={name} place="Nombre" />
        <Input  name="email" value={email} place="Email" />
      </div>
      <div className="messageAndSubmit">
        <button type="submit" className="btn btn-chendo btn-block mb-4">Enviar</button>
      </div>
      <small className={success ? "succes" : ""}></small>
    </form>
  )
}
