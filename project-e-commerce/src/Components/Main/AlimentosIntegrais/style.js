import styled from "styled-components";

export const Titulo = styled.h1`
   .titulo{
      color: #000;
      font-size: 1.8rem;
      font-weight: 700;
      margin: 2rem 1rem;
   }
`;

export const Card = styled.div`
    background-color: transparent;
    width: 200px;
    margin: 2rem 1rem;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: column;
`;

export const CardTitle = styled.div`
   text-align: center;
   padding: 0.5rem 0;
`

export const CardInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const CardButton = styled.div`
  .button {
    all: unset;
    display: flex;
    align-items: center;
    margin: 1rem auto 0 auto;
    position: relative;
    padding: 0.3em 2em;
    border: mediumspringgreen solid 0.15em;
    border-radius: 0.25em;
    color: mediumspringgreen;
    font-size: 1.2em;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: border 300ms, color 300ms;
    user-select: none;
  }
  .button p {
    z-index: 1;
  }

  .button:hover {
    color: #212121;
  }

  .button:active {
    border-color: teal;
  }

  .button::after, .button::before {
    content: "";
    position: absolute;
    width: 9em;
    aspect-ratio: 1;
    background: mediumspringgreen;
    opacity: 50%;
    border-radius: 50%;
    transition: transform 500ms, background 300ms;
  }

  .button::before {
    left: 0;
    transform: translateX(-8em);
  }

  .button::after {
    right: 0;
    transform: translateX(8em);
  }

  .button:hover:before {
    transform: translateX(-1em);
  }

  .button:hover:after {
    transform: translateX(1em);
  }

  .button:active:before,
  .button:active:after {
    background: teal;
  }
  `;

  export const ContainerCards = styled.div`
   .card {
    display: flex;
    flex-wrap: wrap;
   }
  `