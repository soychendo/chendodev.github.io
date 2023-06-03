import React, { useContext } from "react";
import { GlobalContext } from "@context/GlobalContext";
import { getBrowser } from '@utils/check';
import { ContextProps } from "@context/types";
import { Input } from "@components/contact/Input";
import { Button } from "@components/contact/Button";
import Gif from '@assets/loading.gif'

export const Form = () => {
  const { success, check, name, email, message, loading } = useContext<ContextProps>(GlobalContext);
  const { onSubmit, onChange } = check;

  return (
    <form onSubmit={onSubmit} onLoad={getBrowser} method="POST" id="form">
      <small className={success ? "succes" : ""}></small>
      <div className="form-control" >
        <Input  name="name" value={name} place="Nombre" />
        <Input  name="email" value={email} place="Email" />
      </div>
      <textarea name="message" value={message} onChange={onChange} placeholder="Mensaje"></textarea>
      <div className="messageAndSubmit">
        <Button loading={loading} Gif={Gif} />
      </div>
    </form>
  )
}
