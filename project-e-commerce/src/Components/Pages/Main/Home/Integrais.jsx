import React from "react";
import * as S from "./style";
import Cards from "../Cards/Cards";
import imagem1 from "../../../../assets/react.svg";
import imagem2 from "../../../../assets/imagem/mulher-home.jpg"
import Swiper from "../../Swiper/swiper";
function Home() {
    return (
        <>
        <Swiper />
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
                </div>
            </S.ContainerCards>
            <S.ContainerTornarVegano>
                <div class="tornar__vegano_container">
                    <img src={imagem2} alt="" />
                    <div class="tornar__veg-conteudo">
                        <h1>Por que se tornar vegano?</h1>
                        <p>Tornar-se vegano envolve uma escolha consciente de adotar um estilo de vida mais ético e sustentável. Ao optar por alimentos veganos, os indivíduos contribuem para a redução do sofrimento animal, promovem a preservação do meio ambiente e melhoram sua própria saúde. E-commerces vegano de alimentos oferecem uma plataforma conveniente para explorar e adquirir produtos alinhados com esses valores, proporcionando uma variedade diversificada de opções, desde alimentos orgânicos até alternativas vegetais para produtos tradicionais. Além disso, esses e-commerces frequentemente fornecem recursos educacionais e receitas, incentivando e apoiando os consumidores em sua jornada para um estilo de vida vegano.
                        </p>
                    </div>
                </div>
            </S.ContainerTornarVegano>

            
        </>

    )
}

export default Home
