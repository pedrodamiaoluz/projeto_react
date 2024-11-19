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
    margin: 0.8rem 1rem;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: column;
`;

export const CardTitles = styled.div`
   text-align: center;
   padding: 0.5rem 0;
`

export const CardInputs = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const Buttons = styled.div`
  .buttons {
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
  .buttons p {
    z-index: 1;
    font-size: 0.8em;
    
  }

  .buttons:hover {
    color: #212121;
  }

  .buttons:active {
    border-color: teal;
  }

  .buttons::after, .buttons::before {
    content: "";
    position: absolute;
    width: 9em;
    aspect-ratio: 1;
    background: mediumspringgreen;
    opacity: 50%;
    border-radius: 50%;
    transition: transform 500ms, background 300ms;
  }

  .buttons::before {
    left: 0;
    transform: translateX(-8em);
  }

  .buttons::after {
    right: 0;
    transform: translateX(8em);
  }

  .buttons:hover:before {
    transform: translateX(-1em);
  }

  .buttons:hover:after {
    transform: translateX(1em);
  }

  .buttons:active:before,
  .buttons:active:after {
    background: teal;
  }
  `;

export const ContainerCards = styled.div`
   .card {
    display: flex;
    flex-wrap: wrap;
   }
  `

export const ContainerTornarVegano = styled.div`
  .tornar__vegano_container{
    background-color: #fff;
    width: 950px;
    margin: 50px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  img{
    width: 550px;
    height: 400px;
    object-fit: cover;
  }

.tornar__veg-conteudo{
  width: 500px;
}

.tornar__veg-conteudo h1{
  font-size: 1.8rem;
  font-weight: 700;
}

.tornar__veg-conteudo p{
    padding: 1rem 0;
    text-align: justify;
}
`