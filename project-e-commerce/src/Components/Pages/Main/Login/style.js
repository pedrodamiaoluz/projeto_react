import styled from "styled-components";

export const ContainerLogin = styled.div`

.login__container, .novo__cliente, .esqueceu__senha-container{
    background-color: #ffffff;
    max-width: 600px;
    margin: 80px auto;
    box-shadow: 0 0 4px #bdbcbc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login__container form input{
    width: 500px;
    height: 40px;
    margin-bottom: 10px;
    padding: 5px;
    outline: none;
}

.login__container form .button_cliente, .button_clien a{
    text-decoration: none;
    color: #569641;
    font-weight: 600;
    background-color: transparent;
    padding: 10px 80px;
    text-align: center;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #56C033;
    cursor: pointer;
    transition: background-color .4s ease;
    
}

.login__container form .button_cliente:hover, .button_clien a:hover, .button__esqueceu-senha button:hover{
    background-color: #56C033;
    color: #fff;
    
}

.login__container form span{
    padding: 8px 0;
    text-align: center;

    button{
        text-decoration: none;
        color: #354132;
        font-weight: 500;
        font-size: 15px;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
}

.login__container form label{
    padding: 5px 0;
}

.login__container form{
    display: flex;
    flex-direction: column;
}

.login_conteudo h1, .cliente h1, .senha__container-titulo h1{
    text-align: center;
    font-size: 40px;
    padding-top: 20px;
    color: #2E332C;
    font-weight: bold;
}

.login_conteudo p, .cliente p{
    padding: 20px;
    text-align: center;
}


/*configuração do novo cliente*/

.button_clien{
    margin: 30px auto;
}

/*configuração do formulario de cadatre-se*/

.cadastre-se{
    background-color: #fff;
    max-width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    box-shadow: 0 0 4px #bdbcbc;
}

.cadastre-se .cadastre__se-conteudo h1{
     font-size: 40px;
     font-weight: bold;
     color: #2E332C;
}

.cadastre__se-conteudo p, .senha__container-titulo p{
    text-align: center;
    margin: 20px 0;
 }

 .cadastre-se form{
    display: flex;
    flex-direction: column;
    justify-content: center;
 }

 .cadastre-se form input{
    width: 500px;
    height: 40px;
    padding: 5px;
    outline: none;
 }

 .cadastre-se form label{
    padding: 8px 0;
 }

 .button_cadastro{
    margin: 40px auto 20px auto;
 }

 .button_cadastro button{
    text-decoration: none;
    color: #569641;
    font-weight: 600;
    background-color: transparent;
    padding: 10px 100px;
    text-align: center;
    margin: 20px auto;
    border-radius: 5px;
    transition: .7s;
    border: 1px solid #56C033;
    cursor: pointer;
 }

 .button_cadastro button:hover{ 
    background-color: #56C033;
    color: #fff;
}

 /*configuração sobre Esqueceu senha*/

 .esqueceu__senha-container form{
    display: flex;
    flex-direction: column;
    justify-content: center;
 }

 .esqueceu__senha-container form label{
    padding: 8px 0;
 }

 .esqueceu__senha-container form input{
    width: 500px;
    height: 40px;
    padding: 5px;
    outline: none;
 }

 .button__esqueceu-senha{
    margin: 50px auto;
 }

 .button__esqueceu-senha button, a{
    text-decoration: none;
    color: #569641;
    font-weight: 600;
    background-color: transparent;
    padding: 10px 80px;
    text-align: center;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #56C033;
    cursor: pointer;
    transition: background-color .4s ease;
 }

 /*Configurações sobre nova senha*/

.container_novasenha{
    max-width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    box-shadow: 0 0 4px #bdbcbc;;
}

.titulo__novasenha h1{
    font-size: 40px;
     font-weight: bold;
     color: #2E332C;
}

.titulo__novasenha p{
    text-align: center;
    margin: 20px 0;
}

.container_novasenha form{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.container_novasenha form input{
    width: 500px;
    height: 40px;
    padding: 5px;
    outline: none;
}

.container_novasenha form label{
    padding: 8px 0;
}

.button__novasenha{
  margin: 20px auto 0 auto;
}

.button__novasenha button{
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    background-color: #56C033;
    padding: 10px 100px;
    text-align: center;
    margin: 20px auto;
    border-radius: 5px;
    border: none;
    transition: .2s;
    cursor: pointer;

  
    &:hover{  
        background-color: transparent;
        border: 1px solid #56C033;
        color: #569641;
    }
}
`