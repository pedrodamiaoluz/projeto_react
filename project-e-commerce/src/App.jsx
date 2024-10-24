
import './App.css'
import * as S from "./style";
import logo from "./assets/v-mark-vegan-logo-5.png";

export default function App() {

    return (
        <S.Container>
            <div class="header__logo">
                    <S.Image src={logo} alt="" />
            </div>

            <nav class="header__navegacao">
                <S.Ul>
                    <S.Li><S.A href="./index.html">Home</S.A></S.Li>
                    <S.Li><S.A href="./ComprePorCategoria/catogoria0.html">Compre Por Categoria</S.A></S.Li>
                    <S.Li><S.A href="./SobreNos/sobrenos.html">Sobre Nos</S.A></S.Li>
                    <S.Li><S.A href="./ContateNos/contatenos.html">Contate-nos</S.A></S.Li>
                </S.Ul>
            </nav>
        </S.Container>
    )

}

