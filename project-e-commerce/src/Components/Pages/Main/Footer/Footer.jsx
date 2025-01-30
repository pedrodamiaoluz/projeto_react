import React from "react";
import * as S from "./style";
import imagemfooter from "../../../../assets/v-mark-vegan-logo-5.png"
function Footer() {
    return (
        <S.Footer>
                    <div class="footer__container">
                        <div class="footer__logo">
                            <img src={imagemfooter} alt="" />
                            <p>E-commerces vegano de alimentos oferecem uma ampla variedade de produtos livres de ingredientes de origem animal. Essas plataformas são essenciais para consumidores que buscam opções éticas, sustentáveis e saudáveis. Com uma seleção diversificada, incluindo alimentos orgânicos e alternativas vegetais para produtos tradicionais, esses e-commerces atendem às necessidades dos adeptos do veganismo. Além disso, muitos desses e-commerces oferecem recursos educacionais e receitas para apoiar e inspirar uma dieta vegana.
                            </p>
                            <span>vegan@gmail.com | Telefone: 84 93345-3435</span>
                        </div>
                        <div class="footer__recursos">
                            <div class="recursos-titulo">
                                <h1>Recursos</h1>
                            </div>
                            <a href="">Sobre nós</a>
                            <a href="">Contato</a>
                            <a href="">Perguntas Frequentes</a>
                            <a href="">Politica de Envio</a>
                            <a href="">Politica de Devolucão</a>
                            <a href="">Politica de Privacidade</a>
                            <a href="">Solitição de Fornecedor</a>
                        </div>
                        <div class="footer__prod-popular">
                            <div class="prod-titulo">
                                <h1>Produtos Popular</h1>
                            </div>
                            <a href="">Lanches</a>
                            <a href="">Alternativas de Queijos</a>
                            <a href="">Alternativas de Carnes</a>
                            <a href="">Doces</a>
                            <a href="">Sucos</a>
                        </div>
                    </div>
        </S.Footer>
    )
}

export default Footer