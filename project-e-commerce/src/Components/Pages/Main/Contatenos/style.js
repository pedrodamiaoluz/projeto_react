import styled from "styled-components";
import imagem from "../../../../assets/imagem/sobrenos.jpg"

export const ContateNos = styled.div`
 .contate_nos{
    background-image: url(${imagem});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 250px;
} 

.contate_nos .contate_nos-leude{
   display: flex;
   flex-direction: column;
   padding: 5rem;
   color: #354132;
   font-size: 20px;
   gap: 8px;

   a{
    text-decoration: none;
    color: #354132;
   }
}

.contatenos_form h1{
 margin-bottom: 20px;
 color: #354132;
}

.contate__nos{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    gap: 50px;
    padding: 2rem;
}

.catato__conteudo{
    width: 800px;
}

.catato__conteudo h1, h2{
    color: #354132;
    font-size: 30px;
}

.catato__conteudo p{
    padding: 20px 50px 20px 0;
    word-wrap: break-word;
    text-align: justify;
}

.meios_de_contato li{ 
   margin: 20px 0;
}

.redes__sociais .redes{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
}

.redes__sociais .redes a{
    color: #000;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
}

.redes__sociais .bi{
    padding: 0 5px;
}


.formulario .form{
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.formulario button{
    margin: 20px auto;
    padding: 15px 30px;
    background-color: #56C033;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
}

.form .form-conteudo{
    display: flex;
    flex-direction: column;
    margin: 20px 0;
}

.form .form-conteudo input{
    width: 150px;
    height: 30px;
    padding: 5px;
    border-radius: 20px;
    border: 1px solid #56C033;
    outline: none;
}

.form .form-conteudo label{
    padding: 5px 10px;
}

.formulario .mensagem{
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.formulario .mensagem textarea{
    width: 300px;
    height: 100px;
    padding: 5px;
    border: 1px solid #56C033;
    outline: none;
}

`