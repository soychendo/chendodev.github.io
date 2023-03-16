import styled from "styled-components";

export const MenuWrapper = styled.div`

  position: fixed;
  top: 0;
  width: calc(100% - 17% - 10px);
  background-color: #242424ab;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.62em;
  z-index: 999;
  backdrop-filter: blur(5px);
  h1 {
    color: rgba(255, 255, 255, .87);
    font-weight: bold;
  }
  @media (max-width: 991px) {
    width: 100%;
    right: 0;
  }

`
