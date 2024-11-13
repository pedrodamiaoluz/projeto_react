import React from "react";
import * as S from "./style";
import Cards from "../Cards/Cards";
import imagem1 from "../../../../assets/v-mark-vegan-logo-5.png";

function AlimentosIntegrais() {
    return (
        <>
            <S.Titulo>
                <h1 className="titulo">Alimentos Integrais</h1>
            </S.Titulo>
            <S.ContainerCards>
                <div className="card">
                    <Cards
                        src={imagem1}
                        titulo="Pedro"
                    />
                    <Cards
                        src={imagem1}
                        titulo="Alex"
                    />
                    <Cards
                        src={imagem1}
                        titulo="Maria"
                    />
                    <Cards
                        src={imagem1}
                        titulo="Pedro"
                    />
                    <Cards
                        src={imagem1}
                        titulo="Pedro"
                    />
                </div>
            </S.ContainerCards>
        </>

    )
}

export default AlimentosIntegrais
