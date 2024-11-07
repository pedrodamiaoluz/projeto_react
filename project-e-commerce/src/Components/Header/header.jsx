import "../../App.css";
import * as S from "./style";
import logo from "../../assets/v-mark-vegan-logo-5.png";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";



export default function Header() {
    return (
        <S.Container>
            <div class="header__logo">
                <S.Image src={logo} alt="" />
            </div>

            <nav className="flex flex-col">
                <S.Ul>
                    <S.Li><S.A href="./index.html">Home</S.A></S.Li>
                    <S.Li><S.A href="./ComprePorCategoria/catogoria0.html">Compre Por Categoria</S.A></S.Li>
                    <S.Li><S.A href="./SobreNos/sobrenos.html">Sobre Nos</S.A></S.Li>
                    <S.Li><S.A href="./ContateNos/contatenos.html">Contate-nos</S.A></S.Li>
                </S.Ul>
            </nav>
-
            <S.Container_Input>
                <S.Inputs>
                    <S.Input type="text" placeholder="Pesquise produto, marcas, etc..." />
                    <AiOutlineSearch />
                </S.Inputs>
                <S.Container_Icons>
                    <a href="./Login/login.html">
                        <IoMdPerson />
                    </a>
                    <a href="./Carrinho/adicionarcarrino.html">
                        <IoCartOutline />
                    </a>
                </S.Container_Icons>
            </S.Container_Input>

        </S.Container>

    )
}