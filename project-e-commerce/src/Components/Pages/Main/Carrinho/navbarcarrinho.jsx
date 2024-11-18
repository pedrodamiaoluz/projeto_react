import { useNavigate } from "react-router-dom";
import * as S from "./style"

function NavBarCarrinho() {

    const navigate = useNavigate()

    function VoltarCarrinho() {
        navigate("/carrinho");
    }

    function EntraIdentificacao() {
        navigate("/identificacao");
    }

    function EntraPagamento() {
        navigate("/pagamento");
    }

    return (
        <>
            <S.ContainerCarrinho>
                    <div class="carrinho-container-icons">
                        <div class="icons">
                            <a onClick={VoltarCarrinho}>  
                                <span>Carrinho</span>
                            </a>
                        </div>
                        <div class="icons">
                            <a onClick={EntraIdentificacao}>
                                <span>Identificação</span>
                            </a>
                        </div>
                        <div class="icons">
                            <a onClick={EntraPagamento}>                       
                                <span>Pagamento</span>
                            </a>
                        </div>
                    </div>
            </S.ContainerCarrinho>
        </>
    )
}

export default NavBarCarrinho