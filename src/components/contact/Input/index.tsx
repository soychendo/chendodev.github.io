import React, { useContext } from 'react'
import { GlobalContext } from '@context/GlobalContext'
import { ContextProps } from '@context/types'

type inputProps = {
  name: string,
  place: string
  value: string
}

export const Input = ({ value, name, place }: inputProps) => {

  const { check } = useContext<ContextProps>(GlobalContext)

  return (
    <input
      type='text'
      spellCheck="false"
      autoComplete='off'
      placeholder={place}
      id={name}
      name={name}
      value={value}
      onChange={check.onChange}
    />
  )
}
