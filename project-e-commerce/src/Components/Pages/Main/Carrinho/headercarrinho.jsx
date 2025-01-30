import * as S from "./style"
import imagem from "../../../../assets/imagem/header-carrinho.png"

function HeaderCarrinho() {
    return (
        <>
            <S.ContainerCarrinho>
                <header>
                    <div class="carrinho__container">
                        <div class="header__carrinho-container-logo">
                            <img src={imagem} />
                        </div>
                        <div class="borda"></div>
                    </div>
                </header>
            </S.ContainerCarrinho>
        </>
    )
}

export default HeaderCarrinho