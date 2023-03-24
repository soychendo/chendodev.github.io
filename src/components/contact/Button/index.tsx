import React from "react";

type ButtonType = {
  loading: boolean,
  Gif: string
}

export const Button = ({ loading, Gif }: ButtonType): JSX.Element => {

  return (
    <button
      disabled={loading}
      type="submit"
      className="btn btn-chendo btn-block mb-4"
    >
      {loading ? <img src={Gif} width="32" height="32" /> : 'Enviar'}
    </button>
  );
}
