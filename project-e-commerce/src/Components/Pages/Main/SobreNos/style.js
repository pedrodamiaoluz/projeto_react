import styled from "styled-components";
import imagem from "../../../../assets/imagem/sobrenos.jpg"

export const Sobrenos = styled.div`
 .sobre_nos{
    background-image: url(${imagem});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 250px;
} 

.sobre_nos .sobre_nos-leude{
   display: flex;
   flex-direction: column;
   padding: 5rem;
   color: #354132;
   font-size: 20px;
   gap: 8px;

   a{
    cursor: pointer;
    text-decoration: none;
   }
}

.sobre__nos-container{
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
}

.sobre__nos-container > h1{
    color: #56C033;
    font-size: 40px;
    margin-top: 40px;
}

.sobre_nos-conteudo p{
    padding: 5px 0;
    text-align: justify;
    word-wrap: break-word;
}

.sobre_nos-conteudo > h1{
    color: #354132;
    font-size: 22px;
}
`