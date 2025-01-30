import { useNavigate } from "react-router-dom"
import Header from "../../Header/header"
import Footer from "../Footer/Footer";
import * as S from "./style"

function EsqueceuSenha() {

    const navigate = useNavigate()

    function VoltaLogin() {
        navigate("/novasenha");
    }
    return (
        <>
            <Header />
            <S.ContainerLogin>
                <div class="esqueceu__senha-container">
                    <div class="senha__container-titulo">
                        <h1>Esqueceu Senha</h1>
                        <p>Para recuperar seu acesso, precisamos do seu E-mail ou CPF.</p>
                    </div>

                    <form>
                        <label>E-mail ou CPF</label>
                        <input type="text" />
                    </form>

                    <div class="button__esqueceu-senha">
                        <a onClick={VoltaLogin}>Continuar</a>
                    </div>
                </div>
            </S.ContainerLogin>
            <Footer />
        </>

    )
}

export default EsqueceuSenha