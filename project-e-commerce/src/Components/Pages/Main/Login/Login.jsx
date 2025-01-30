import { useNavigate } from "react-router-dom"
import Header from "../../Header/header"
import Footer from "../Footer/Footer";
import * as S from "./style"

function Login() {

    const navigate = useNavigate()

    function Cadastrase() {
        navigate("/cadastrese");
    }

    function EsqueceuSenha(){
        navigate("/esqueceusenha");
    }
    return (
        <>
            <Header />
            <S.ContainerLogin>
                <div class="login__container">
                    <div class="login_conteudo">
                        <h1>Clientes Registrados</h1>
                        <p>Se você tiver uma conta, faça login com seu endereço de e-mail.</p>
                    </div>
                    <form>
                        <label for="">E-mail *</label>
                        <input name="email" placeholder="E-mail" id="imail" />
                        <label for="">Senha *</label>
                        <input type="password" placeholder="Senha" name="senha" id="senha" />
                        <button class="button_cliente" formaction="../index.html">Login</button>
                        <span><button onClick={EsqueceuSenha}>Esqueseu sua senha?</button></span>
                    </form>
                </div>
                <div class="novo__cliente">
                    <div class="cliente">
                        <h1>Novos Clientes</h1>
                        <p>
                            Criar uma conta traz muitos benefícios: finalizar a compra com mais rapidez, manter mais de um endereço, rastrear pedidos e muito mais.
                        </p>
                    </div>
                    <div class="button_clien">
                        <a onClick={Cadastrase}>Criar a sua conta aqui</a>
                    </div>
                </div>
            </S.ContainerLogin>
            <Footer />
        </>
    )
}

export default Login