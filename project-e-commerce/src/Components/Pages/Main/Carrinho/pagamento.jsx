import * as S from "./style"
import Header from "../../Header/header"
import Footer from "../../../Pages/Main/Footer/Footer"
import NavBarCarrinho from "./navbarcarrinho"
import HeaderCarrinho from "./headercarrinho"

function Pagamento() {
    return (
        <>
            <Header />
            <HeaderCarrinho />
            <S.ContainerCarrinho>
                <div class="main__carrinho-container">
                    <NavBarCarrinho />
                    <div class="titulo__carrinho">
                        <h1>Pagamento</h1>
                    </div>
                    <div class="pagamento__container">
                        <div class="menu_cartao-credito">
                            <div class="menu_conteudo">

                                <span>Cartão de Credito</span>
                            </div>
                            <div class="cartao__img">
                                <img src="./Icons/image.png" alt="" />
                                <img src="./Icons/image copy.png" alt="" />
                                <img src="./Icons/image copy 2.png" alt="" />
                                <img src="./Icons/image copy 3.png" alt="" />
                            </div>
                        </div>
                        <form class="menu_form">
                            <input type="text" name="" id="" placeholder="Name Card" />
                            <input type="text" name="" id="" placeholder="Card Number" />
                            <div class="validade__codigo">
                                <input class="Valide_Thru" type="month" id="" />
                                <input class="Securite_Code" type="text" name="" id="" placeholder="Securite Code" />
                            </div>
                        </form>
                    </div>
                    <button>Finalizar Pedido</button>
                </div>

            </S.ContainerCarrinho>
            <Footer />
        </>
    )
}

export default Pagamento