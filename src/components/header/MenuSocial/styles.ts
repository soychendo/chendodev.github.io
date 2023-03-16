import styled from "styled-components";

export const MenuSocialDiv = styled.div`

  a {
    margin: .3vmax;
    i {
      color: #555;
      font-size: 1.5vmax;
      word-wrap: break-word;
    }
  }

  footer {
    color: #555;
    font-size: 1vmax;
    margin-bottom: 2vmax;
  }

  @media (max-width: 991px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: .5em;
    a {
      margin: .5em;
      i {
        font-size: 1em;
      }
    }
    footer {
      display: none;
    }
  }
`;
