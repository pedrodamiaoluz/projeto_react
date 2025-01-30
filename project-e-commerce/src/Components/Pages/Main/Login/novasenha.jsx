import { useNavigate } from "react-router-dom"
import Header from "../../Header/header"
import Footer from "../Footer/Footer";
import * as S from "./style"

function NovaSenha() {

    const navigate = useNavigate()

    function VoltarLogin() {
        navigate("/login");
    }

    return (
        <>
            <Header />
            <S.ContainerLogin>
                <div class="container_novasenha">
                    <div class="titulo__novasenha">
                        <h1>Criar a Nova Senha</h1>
                        <p>Sua senha deve conter no minimo 8 caractere!!!</p>
                    </div>

                    <form action="">
                        <label for="#">Informe a nova senha</label>
                        <input type="text" placeholder="Nova senha" />
                        <label for="#">Confirme a nova senha</label>
                        <input type="text" placeholder="Confirme a nova senha" />
                    </form>

                    <div class="button__novasenha">
                        <button onClick={VoltarLogin}>Confirmar</button>
                    </div>
                </div>
            </S.ContainerLogin>
            <Footer />
        </>
    )
}

export default NovaSenha