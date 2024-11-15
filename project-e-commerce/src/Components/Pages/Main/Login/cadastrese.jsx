import { useNavigate } from "react-router-dom"
import Header from "../../Header/header"
import Footer from "../Footer/Footer";
import * as S from "./style"

function Cadastrase() {

    const navigate = useNavigate()

    function VoltaLogin() {
        navigate("/login");
    }
    return (
        <>
            <Header />
            <S.ContainerLogin>
                <div class="cadastre-se">
                    <div class="cadastre__se-conteudo">
                        <h1>Criar Nova Conta De Cliente</h1>
                        <p>Criar uma conta é fácil. Basta preencher o formulário abaixo.</p>
                    </div>

                    <form>
                        <label for="#">Nome Completo *</label>
                        <input type="text" placeholder="Informe seu nome completo" />
                        <label for="#">CPF *</label>
                        <input type="text" placeholder="Informe seu nome CPF" />
                        <label for="#">Data de nascimento *</label>
                        <input type="text" placeholder="Informe sua data de nascimento" />
                        <label for="#">Telefone *</label>
                        <input type="tel" name="telefone" id="telefone" placeholder="(DDD) 00000-0000" />
                        <label for="#">E-mail *</label>
                        <input type="email" name="email" id="email" placeholder="E-mail" />
                        <label for="#">Senha *</label>
                        <input type="password" name="senha" id="senha" placeholder="Senha" />
                    </form>

                    <div class="button_cadastro">
                        <button onClick={VoltaLogin} class="button_cadastr">Criar</button>
                    </div>
                </div>
            </S.ContainerLogin>
            <Footer />
        </>

    )
}

export default Cadastrase