import styled from "styled-components";

export const ContainerSwiper = styled.div`
  .Swiper{
    margin: 0 1rem;
    padding: 2rem 0;
  }

  .titulo-swiper{
      color: #354132;
      font-size: 0.9rem;
      font-weight: 700;
      margin: 3rem 1rem 0 1rem;
  }

  .swiper-container{
    background-color: transparent;
    width: 170px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  }

  .card-swiper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .card-swiper img{
    width: 170px;
    height: 170px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .card-swiper a{
    text-decoration: none;
    color: #000;
    text-align: center;
    font-size: 0.8rem;
    cursor: pointer;
  }

`