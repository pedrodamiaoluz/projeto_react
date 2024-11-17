import "../../../App.css";
import * as S from "./style";
import logo from "../../../assets/v-mark-vegan-logo-5.png";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate()

    function EntraLogin() {
        navigate("/login");
    }

    function EntraCarrinho(){
        navigate("/carrinho")
    }

    return (
        <S.Container>
            <div class="header__logo">
                <S.Image src={logo} alt="" />
            </div>
            <NavBar />
            <S.Container_Input>
                <S.Inputs>
                    <S.Input type="text" placeholder="Pesquise produto, marcas, etc..." />
                    <AiOutlineSearch />
                </S.Inputs>
                <S.Container_Icons>
                    <a onClick={EntraLogin}><IoMdPerson /></a>
                    <a onClick={EntraCarrinho}><IoCartOutline /></a>
                </S.Container_Icons>
            </S.Container_Input>

        </S.Container>

    )
}

export default Header