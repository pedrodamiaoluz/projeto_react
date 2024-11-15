import styled from "styled-components";

export const Footer = styled.div`
  .footer__container{
    background-color:#4B6B40;
    margin-top: 80px;
    padding: 1rem;
    display: flex;
}

.footer__logo{
    margin-top: 40px;
    display: flex;
    flex-direction: column; 
    gap: 20px;
    color: #fff;

    p{
        background-color: transparent;
        width: 500px;
        text-align: justify;
        font-size: 14px;
    }

    span{
        font-size: 1rem;
    }
}

.footer__logo img{
    width: 150px;
    height: 100px;
}

.recursos-titulo, .prod-titulo{
    margin: 30px 0 13px 0;
    font-size: 0.7rem;
}

.footer__recursos, .footer__prod-popular{
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 0 20px;
}

.footer__recursos a, .footer__prod-popular a{
    text-decoration: none;
    color: #fff;
    padding: 5px 0;
    font-size: 0.8rem;
}

.footer__recursos a:hover, .footer__prod-popular a:hover{
    color: #4EEA18;
}
`