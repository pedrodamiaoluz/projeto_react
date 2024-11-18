import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
function NavBar() {

    const navigate = useNavigate()

    function NavClick() {
        navigate("/home");
        navigate("/altaproteina");
        navigate("/sobrenos");
        navigate("/contatenos");
    }

    return (
        <S.Navagate>
            <ul>
                <li>
                    <a href="/home" onClick={NavClick}>Home</a>
                </li>
                <li>
                    <a href="/altaproteina" onClick={NavClick}>Compre Por Categoria</a>            
                </li>
                <li>
                    <a href="/sobrenos" onClick={NavClick}>Sobre Nos</a>
                </li>
                <li>
                    <a href="/contatenos" onClick={NavClick}>Contate-nos</a>
                </li>
            </ul>
        </S.Navagate>
    )
}

export default NavBar