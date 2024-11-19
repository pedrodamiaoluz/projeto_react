import styled from "styled-components";

export const ContainerComprePorCategoria = styled.div`

/*Configuraçoes sobre Compre por categoria*/

.compre_por_categoria{
   min-width: 900px;
   margin: 0 auto;
   padding: 2rem;
}

.categoria-flex{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.compre_por_categoria-container{
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   width: 240px;
}

.compre_por_categoria-container h2{
    margin: 30px 0 50px 0;
    font-size: 18px;
    font-weight: bold;
}

.categoria__links{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 20px;
    width: 300px;
}

.categoria__links a{
    text-decoration: none;
    color: #2E332C;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
}

.categoria__links a:hover{
    color: #569641;
}

/*Configurações sobre escolha uma categoria*/

.escolha__categorias{
    background-color: transparent;
    margin-left: 130px;
}

.escolha__categorias h1{
    padding: 50px 0 50px 20px; 
    font-size: 18px;
}

.categoria ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0 2%;
    align-items: center;
    gap: 18px;
}

.categoria ul li{
    background-color: #fff;
    list-style-type: none;
    width: 220px;
    height: 280px;
    border-radius: 10px;
    box-shadow: 0 0 7px #bdbcbc;
    display: flex;
    justify-content: center;
    align-items: center;
}

.categoria ul li a{
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;

    span{
        padding: 0.7rem 0;
        text-align: center;
        color: #000;
        font-weight: 500;
    }

}

.categoria ul li a img{
    width: 220px;
    height: 220px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: fill;
}


/*Configuração sober compre o seu produto*/

.compre_produto{
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2{
      margin: 30px 0 50px 0;
      font-size: 18px;
      font-weight: bold; 
    }
}

.compre_produto-links{
    background-color: transparent;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 20px;
}

.compre__produto__links-lista h3{
    margin: 30px 0 20px 0;
    color: #569641;
    font-weight: 400;
    font-size: 23px;
}

.compre__produto__links-lista li{
   list-style-type: none;
   padding-bottom: 20px; 
}

.compre__produto__links-lista li a{
    text-decoration: none;
    color: #000;
    transition: .5s;
}

.compre__produto__links-lista li a:hover{
    color: #569641;
}


.compre_produto-links details summary{
    color: #000;
    cursor: pointer;
}

.compre_produto-links details summary a{
    text-decoration: none;
    color: #2E332C;
    font-size: 15px;
    font-weight: 500;
    padding-left: 20px;
}

.compre_produto-links details summary .lanche_style, .compre_produto-links details summary .chocolated_style, .compre_produto-links details summary .chocolated_style, .compre_produto-links details summary .queijoovoslaticinos__style, .compre_produto-links details summary .carnefrutosmar_style, .compre_produto-links details summary .produtoanimaiscompanhia_style, .compre_produto-links details summary .produtopanificacao_style, .compre_produto-links details summary .fundamentosdespensa_style, .compre_produto-links details summary .produtosdepanificação_style, .compre_produto-links details summary .fundamentosdadespensa_style{
    color: #56C033;
    font-weight: 600;
}

.compre_produto-links details ul{
    list-style-type: none;
    padding: 20px 0 5px 30px;
    font-size: 15px;
}

.compre_produto-links details ul li{
    padding: 5px 0;
}

.compre_produto-links details ul li a{
    text-decoration: none;
    color: #000;
}

.compre_produto-links details ul li a:hover{
    color: #569641;
}

/*configuraça do leude compra meu produto*/

.leaude_contaeiner{
    background-color: rgba(255, 136, 0, 0.733);
    padding: 20px 0;
    margin-top: 20px;
}

.compre_por_categoria-leaude{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.leaude_img img{
    width: 550px;
    height: 200px;
    object-fit: cover;
}

.leaude_conteudo{
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1{
        font-size: 40px;
    }
}

.leaude_conteudo p{
    width: 600px;
    text-align: justify;
}

.leaude_conteudo span a{
    text-decoration: none;
    color: #fff;
}

.compre__container{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 90px;
}


.produtos_titulo{
    margin: 40px 0 30px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-items: center;

}

.produtos_titulo span{
    display: flex;
    align-items: center;
}

.produtos_titulo span a{
    text-decoration: none;
    color: #000;
    font-weight: 400;
}

.produtos_titulo span a:hover{
    color: #569641;
}

.compre__produto-liste ul{
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.compre__produto-liste ul li{
    background-color: #fff;
    width: 220px;
    box-shadow: 0 0 7px #bdbcbc;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    p{
        color: #2E332C;
        margin: 20px 20px;
    }
}

.compre__produto-liste ul li img{
    margin: 20px 0;
    width: 150px;
    height: 150px;
    object-fit:cover;
}

.compre__produto-liste ul li a{
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button_produto{
    text-decoration: none;
    background-color: #4EEA18;
    padding: 10px 15px;
    margin: 20px 0;
    border-radius: 5px;
}

.button_produto a{
    color: #2E332C;
    font-weight: 600;
}

.preco_quantidade{
    display: flex;
    align-items: center;
    gap: 30px;
}

.lisye_quantidade{
    border: 1px solid #4EEA18;
    cursor: pointer;
    text-align: center;
}

.preco_quantidade span input{
    width: 40px;
    height: 20px;
    padding: 5px;
    border-left: 1px solid #4EEA18;
    border-right:  1px solid #4EEA18;
    border-bottom:none;
    border-top: none;
    outline: none;
}

/*Cofiguração sobre a categoria leaude__naocontemglutem-contaeiner*/

.compre__conteudo-container{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
}

.leaude__categoria-contaeiner{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.leaude__categoria-conteudo{
    background-color: #4b6b40a8;
    padding: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin: 20px 50px 20px 0;
    font-size: 12px;
    color: #000;

    h1{
        font-size: 1.7rem;
        font-weight: 400;
        margin: 20px 0;
        color: #2E332C;
    }

    p{
        text-align: justify;
        font-size: 15px;
        color: #354132;
    }
}

.leaude__categoria-conteudo span{
    color: #2E332C;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
}

.leaude__categoria-conteudo span a{
    text-decoration: none;
    color: #2E332C;
    transition: .3s;
    cursor: pointer;
}

.leaude__categoria-conteudo span a:hover{
    color:#fff;
}

/*------------------------------------------------------------------*/

.categoria__lista-link, .marca__lista-link{
    display: none;
}

.compre_produto-links form{
    margin-top: 25px;
}

.compre_produto-links form .produto-links-Tit{
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    color: #000;
}

.produto-links-Tit .bi{
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    padding-left: 20px;
}

.compre_produto-links form .produto-links-Tit a{
    text-decoration: none;
    color: #000;
    font-weight: 500;
    transition: .2s;
}

.compre_produto-links form .produto-links .produto-links-Tit a:hover{
    color: #569641; 
}

.compre_produto-links form .categoria__lista-link{
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    height: 50vh;
}

.categoria__lista-link::-webkit-scrollbar{
    width: 5px;
}

.categoria__lista-link::-webkit-scrollbar-thumb{
    background-color: #0000003f;
    width: 5px;
    border-radius: 20px;
}

.categoria__lista-link li a span:hover{
    color: #569641;
    transition: .3s;
}

.compre_produto-links ul{
    list-style-type: none;
    margin: 20px 0;
}

.compre_produto-links ul li a{
    text-decoration: none;
    color: #000;
    padding: 3px 20px;
}

.compre_produto-links ul li span:hover{
    color: #569641;
    transition: .3s;
}

.compre_produto-links ul li > .lista__link{
    display: flex;
    align-items: center;
    gap: 10px;

    input{
        cursor: pointer;
    }

    span{
        font-size: 13px;
    }
}

.compre_produto-links ul li .lista__link .lista-titulos{
    font-size: 15px;
}

.compre_produto-links ul li .lista__link:hover{
    color: #000;
}


/*------------------------------------------------------------------*/

.leuade__produto-categoria{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.leuade__produto-categoria ul li{
    background-color: #fff;
    width: 263px;
    box-shadow: 0 0 7px #bdbcbc;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    p{
        color: #2E332C;
        margin: 20px 0;
    }
}

.leuade__produto-categoria ul li img{
    margin-top: 20px;
    width: 150px;
    height: 150px;
    object-fit: cover;
}

.leuade__produto-categoria ul li a{
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button__leaude-produto{
    text-decoration: none;
    background-color: #4EEA18;
    padding: 10px 25px;
    margin: 20px 0;
    border-radius: 5px;
}

.button__leaude-produto a{
    color: #2E332C;
    font-weight: 600;
}

.leuade__produto-preco{
    display: flex;
    align-items: center;
    gap: 80px;
}

.leaude__quantidade{
    border: 1px solid #4EEA18;
    cursor: pointer;
    text-align: center;
}

.leuade__produto-preco span input{
    width: 40px;
    height: 20px;
    padding: 5px;
    border-left: 1px solid #4EEA18;
    border-right:  1px solid #4EEA18;
    border-bottom:none;
    border-top: none;
    outline: none;
}

.container-card__altaproteina{
    display: flex;
    flex-wrap: wrap;
    margin: 0 1.7rem;
}

/*Configurações sobre os tipos de marcas*/

.compre_produto-links .marca__lista-link{
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    height: 50vh;
}

.marca__lista-link::-webkit-scrollbar{
    width: 5px;
}

.marca__lista-link::-webkit-scrollbar-thumb{
    background-color: #0000003f;
    width: 5px;
    border-radius: 20px;
}

/*Configurações sobre os tipos Saúde e Ingredientes*/

.saude__Ingredientes ul li .lista__link span{
    font-size: 15px;
}
   
`