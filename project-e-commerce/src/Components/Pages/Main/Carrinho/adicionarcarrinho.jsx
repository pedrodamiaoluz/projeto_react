import Header from "../../Header/header"
import * as S from "./style"
import imagem from "../../../../assets/imagem/header-carrinho.png"
function AdicinarCarrinho() {
    return (
        <>
            <Header />
            <S.ContainerCarrinho>
                <header>
                    <div class="carrinho__container">
                        <div class="header__carrinho-container-logo">
                            <img src={imagem} />
                        </div>
                        <div class="borda"></div>
                    </div>
                </header>
                <div class="main__carrinho-container">
                    <div class="carrinho-container-icons">
                        <div class="icons">
                            <a >
                                
                                <span>Carrinho</span>
                            </a>
                        </div>
                        <div class="icons">
                            <a href="">
                                
                                <span>Identificação</span>
                            </a>
                        </div>
                        <div class="icons">
                            <a href="">
                               
                                <span>Pagamento</span>
                            </a>
                        </div>
                    </div>
                
                <div class="titulo__carrinho">
                    <h1>Carrinho</h1>
                </div>
                <div className="linhas" ></div>

                <table class="carrinho__adicionado">
                    <tbody class="tbodyCarrinho">
                        <tr class="produto-adicionado">
                            <td class="carrinho__conteudo-img">
                                <img alt="" />
                                <span class="produto-title">Batata fritas</span>
                            </td>
                            <td>
                                <span class="produto-preco">R$23,68</span>
                            </td>
                            <td class="remover__quantidade">
                                <input class="input__quantidade" type="number" value="0" min="0" />
                                {/* <button type="button" class="button-remov">Remover</button> */}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="linhas" ></div>
                <table class="informações__do__produto">
                    <tr>
                        <td class="inf-produto">
                            <p>Outras opções de <strong>Entrega</strong> na proxima etapa</p>
                            <p><strong>Frete para o CEP</strong></p>
                            <input type="text" name="" id="" placeholder="00000-000" />
                        </td>
                        <td colspan="3" class="total__geral">
                            <p>Frete Total: </p>
                            <div class="total">
                                <strong>Total: </strong>
                                <span>R$ 0,00</span>
                            </div>
                            <div class="button_total">
                                <a>Continuar</a>
                            </div>
                        </td>

                    </tr>
                </table>
                </div>
            </S.ContainerCarrinho>
        </>
    )
}

export default AdicinarCarrinho