import React, { useContext } from "react";
import { GlobalContext } from "@context/GlobalContext";

export const Form = () => {
  const {
    input,
    success,
    onSubmit,
    handleChange,
    state,
    handleSubmit
  } = useContext(GlobalContext);

  return (
    <form onSubmit={handleSubmit} method="POST" id="form">
      <div className="form-control" >
        <input type="text" spellCheck="false" id="name" name="name" value={input.name} onChange={handleChange} placeholder="Nombre" autoComplete="off" />
      </div>
      <div className="form-control" >
        <input type="email" spellCheck="false" id="email" name="email" value={input.email} onChange={handleChange} placeholder="Email" autoComplete="off" />
      </div>
      <textarea name="message" spellCheck="false" id="message" value={input.message} onChange={handleChange} placeholder="Mensaje"></textarea>
      <div className="messageAndSubmit">
        <small className={success ? "succes" : ""}></small>
        <button onClick={e => onSubmit(e)} type="submit" disabled={state.submitting} className="btn btn-chendo btn-block mb-4">Enviar</button>
      </div>
    </form>
  )
}
