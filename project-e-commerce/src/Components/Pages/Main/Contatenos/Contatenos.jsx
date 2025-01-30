import { useNavigate } from "react-router-dom"
import Header from "../../Header/header"
import Footer  from "../../Main/Footer/Footer"
import * as S from "./style"
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";


function Contatenos() {

    const navigate = useNavigate()

    function Voltar() {
        navigate("/");
    }
    return (
        <>
            <Header />
            <S.ContateNos>
                <div class="contate_nos">
                    <div class="contate_nos-leude">
                        <span><a href="" onClick={Voltar}>Home/ </a> Contate-nos</span>
                        <h1>Contato</h1>
                        <p>Estamos aqui para ajudar! Você.</p>
                    </div>
                </div>
                <div class="contate__nos">
                    <div class="catato__conteudo">
                        <h1>Estamos aqui para ajudar! Você pode nos contatar através dos seguintes canais:</h1>
                        <p>
                            Tem alguma dúvida, sugestão ou precisa de ajuda? Nossa equipe está aqui para você! Entre em contato conosco pelo email e telefone. Estamos ansiosos para ouvir de você!
                        </p>
                        <div class="meios_de_contato">
                            <h2>Email:</h2>
                            <li><a href="">vegan@gmail.com</a></li>
                            <h2>Telefone:</h2>
                            <li>84 998345678</li>
                        </div>
                        <div class="redes__sociais">
                            <p>
                                Precisando de suporte ou quer saber mais sobre nossos produtos? Não hesite em nos contatar! Estamos disponíveis de segunda a sexta-feira, das 9h às 18h, prontos para ajudar.
                            </p>
                            <h2>Redes Sociais</h2>
                            <p>Conecte-se conosco através das redes sociais.</p>
                            <div class="redes">
                                <a href=""><FaInstagram /> Instagram</a>
                                <a href=""><FaTwitter /> Twitter</a>
                                <a href=""><TiSocialFacebook /> Fecebook</a>
                            </div>
                        </div>
                    </div>
                    <div class="contatenos_form">
                        <h1>Envie-nos uma mensagem</h1>
                        <p>Quer compartilhar suas ideias, fale conosco. Utilize o formulário abaixo</p>
                        <div class="formulario">
                            <form>
                                <div class="form">
                                    <div class="form-conteudo">
                                        <label for="">Nome *</label>
                                        <input type="text" name="" id="" placeholder="Nome" />
                                    </div>
                                    <div class="form-conteudo">
                                        <label for="">Email *</label>
                                        <input type="email" name="" id="" placeholder="Email" />
                                    </div>
                                    <div class="form-conteudo">
                                        <label for="">Telefone *</label>
                                        <input type="text" name="" id="" placeholder="Telefone" />
                                    </div>
                                </div>
                                <div class="mensagem">
                                    <label for="">Mensagens *</label>
                                    <textarea name="" id=""></textarea>
                                </div>
                            </form>
                            <button>Enviar</button>
                        </div>
                    </div>
                </div>
            </S.ContateNos>
            <Footer />
        </>
    )
}

export default Contatenos