import styled from "styled-components";

export const ContainerCarrinho = styled.div`

.linhas{
    border: 1px solid #000;
    width: 600px;
    margin: 4px auto;
}

header > .carrinho__container{
    background-color: #4B6B40;
    max-width: 1500px;
    margin: 0 auto;
    height: 84px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    box-shadow: 0 0 8px #bdbcbc;
   
}

.carrinho__container .borda{
    border-image: linear-gradient(to left,#4B6B40, #56C033, #354132, #569641, #2E332C, #4EEA18) 2;
    border-style: solid;
    border-radius: 20px;
    width: 800px;
    margin: 4px auto;
   
}

.header__carrinho-container-logo img{
    width: 100px;
    height: 50px;
    margin-left: 230px;
}

/*configurações da main*/

.main__carrinho-container{
    background-color: transparent;
    width: 600px;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    justify-content: space-around;
    align-items: center;
    /*box-shadow: 0 0 8px #bdbcbc;*/

}

.main__carrinho-container .carrinho-container-icons{
    margin: 50px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

.titulo__carrinho h1{
    color: #569641;
    text-align: center;
    margin-bottom: 20px;
}

.carrinho-container-icons .bi{
   font-size: 30px;
   border: 1px solid #569641;
   border-radius: 100%;
   padding: 12px;
}

.carrinho-container-icons .icons a{
    text-decoration: none;
    color: #000;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.main__carrinho-container button{
    margin-top: 20px;
    border: none;
    padding: 10px 15px;
    background-color: #4EEA18;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    color: #354132;
}

/*------------------------------------*/
.produto-adicionado{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
}

.carrinho__conteudo-img{
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.carrinho__conteudo-img img{
    width: 120px;
    height: 120px;
}

.remover__quantidade{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
}

.input__quantidade{
    border: 1px solid #4EEA18;
    width: 70px;
    padding: 8px 5px;
    font-size: 17px;
    outline: none;
}

.carrinho__adicionado button{
    background-color: #4EEA18;
    border: none;
    padding: 10px 15px;
    margin: 20px 0;
    border-radius: 5px;
    color: #2E332C;
    font-weight: 700;
    cursor: pointer;
}

/*------------------------------------*/

.informações__do__produto tr{
    background-color: transparent;
    width: 600px;
    margin: 5px auto;
    display: flex;
    flex-direction: row;
    padding: 20px 0;
    justify-content: space-around;
    align-items: center;
}

.informações__do__produto .inf-produto, .total__geral{
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.total{
    display: flex;
    gap: 5px;
}

.informações__do__produto .inf-produto input{
    width: 100px;
    border: 1px solid #4EEA18;
    outline: none;
    padding: 5px;
}

.total__geral .button_total{
    margin: 20px 0;
}

.total__geral .button_total a{
    text-decoration: none;
    background-color: #4EEA18;
    color: #2E332C;
    font-weight: 700;
    padding: 10px 15px;
    border-radius: 5px;
}

/*Configurações sobre a identificação*/

.form__indentificacao-container form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.form__indentificacao-container .identivicacao__input input{
    width: 620px;
    height: 50px;
    padding: 20px 8px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #bdbcbc;
}

.identivicacao__input .endereco_numero{
    display: flex;
    justify-content: center;
    gap: 20px;
}

.identivicacao__input .endereco_numero .endereco{
    width: 500px;
}

.identivicacao__input .endereco_numero .numero{
    width: 100px;
}

.identivicacao__input .bairo_complemento{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.identivicacao__input .cidade_estado_cep{
    display: flex;
    justify-content: center;
    gap: 20px;
}

.identivicacao__input .cidade_estado_cep input{
    width: 197px;
}

.identivicacao__input .cidade_estado_cep select{
    background-color: transparent;
    padding: 0 5px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #bdbcbc;
    text-overflow: ellipsis;
    color: #6d6969;
    cursor: pointer;
}

.identivicacao__input .cidade_estado_cep select option{
    color: #000;
    
}

.form__buutton{
    display: flex;
    justify-content: end;
    padding: 0 1rem;
}

.form__buutton a{
    background-color: #4EEA18;
    text-decoration: none;
    border: none;
    padding: 10px 15px;
    margin: 20px 0;
    border-radius: 5px;
    color: #2E332C;
    font-weight: 700;
    cursor: pointer;
}


/*Configurações sobre o pagamento*/

.pagamento__container .menu_form{
    display: none;
}

.pagamento__container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2px;

}

.pagamento__container input{
    width: 500px;
    height: 50px;
    padding: 20px 8px;
    outline-color: #4EEA18;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5px 0;
}

.validade__codigo{
    display: flex;
    gap: 20px;
}

.validade__codigo .Valide_Thru{
    width: 370px;
}

.validade__codigo .Securite_Code{
    width: 110px;
}

.menu_cartao-credito{
    background-color: transparent;
    border: 1px solid #4EEA18;
    width: 500px;
    height: 70px;
    padding: 20px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.menu_conteudo{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.menu_conteudo i{
    font-size: 30px;
    cursor: pointer;
}

.menu_cartao-credito .cartao__img{
    display: flex;
    justify-content: center;
    gap: 8px;
}

.cartao__img img{
    width: 30px;
    height: 30px;
    object-fit: cover;
}
`