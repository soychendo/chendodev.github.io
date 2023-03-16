import styled from "styled-components";

export const ContainerButton = styled.div`

  position: relative;
  justify-self: end;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 34px;
  transition: all .5s ease-in-out;
  padding-right: 1rem;

`
export const MenuButton = styled.div`

  width: 34px;
  height: 1px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 34px;
    height: 1px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255,101,47,.2);
    transition: all .5s ease-in-out;
  }
  &:before {
    transform: translateY(-10px);
  }
  &:after {
    transform: translateY(10px);
  }

`
