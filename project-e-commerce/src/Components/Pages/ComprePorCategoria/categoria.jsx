import { useNavigate } from "react-router-dom"
import Header from "../Header/header"
import * as S from "./style"
import imgaltaproteina from "../../../assets/imagem/img-categorias/AltaProteina.jpg"
import imgbaixoteor from "../../../assets/imagem/img-categorias/baixo-teor-de-sodio.jpg"
import imgnaocluten from "../../../assets/imagem/img-categorias/nao-contem-cluten.jpg"

function Categorias() {

    const navigate = useNavigate()

    function EntraAltaProteina(){
        navigate("/altaproteina");
    }
    return (
        <>
            <Header />
            <S.ContainerComprePorCategoria>
                <section class="compre_por_categoria">
                    <div class="categoria-flex">
                        <div class="compre_por_categoria-container">
                            <h2>Selecione uma categoria</h2>
                            <div class="categoria__links">
                                <a href="./BaixoTeordeSodio/baixoteordesodio.html">Escolhas com baixo teor de sódio</a>
                                <a onClick={EntraAltaProteina}>Alta proteína</a>
                                <a href="./NaoContemGlutem/naocontemglutem.html">Não contém gluten</a>
                                <a href="./CarneFrutosMar/carnefrutosmar.html">Carne e Frutos do Mar</a>
                                <a href="./QueijoOvosLatcinios/queijoovoslaticinos.html">Queijo, Ovos e Laticínios</a>
                                <a href="./ChocolateDoce/chocolatedoce.html">Chocolate, Doces e Doces</a>
                                <a href="./Lanche/lanche.html">Lanches</a>
                                <a href="./ProdutosAnimais/produtoanimaiscompanhia.html">Produtos para animais de companhia</a>
                                <a href="./ProdutosPanificacao/produtospanificacao.html">Produtos de panificação</a>
                                <a href="./FundamentosDespensa/fundamentodespensa.html">Fundamentos da despensa</a>
                            </div>
                        </div>
                        <div class="escolha__categorias">
                            <h1>Escolha uma Categoria</h1>
                            <div class="categoria">
                                <ul>
                                    <li>
                                        <a href="">
                                            <img src={imgbaixoteor} alt="" />
                                            <span>Escolhas com baixo teor de sódio</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={EntraAltaProteina}>
                                            <img src={imgaltaproteina} alt="" />
                                            <span>Alta proteína</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={imgnaocluten} alt="" />
                                            <span>Não contém gluten</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="/pages/Imagem-das-Categoria/Carne_Frutos_do_Mar.webp" alt="" />
                                            <span>Carne e Frutos do Mar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="/pages/Imagem-das-Categoria/Queijo_Ovos_Laticínios.avif" alt="" />
                                            <span>Queijo, Ovos e Laticínios</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="/pages/Imagem-das-Categoria/Chocolate_Doces_Doces.png" alt="" />
                                            <span>Chocolate, Doces e Doces</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="/pages/Imagem-das-Categoria/Lanche.jpg" alt="" />
                                            <span>Lanches</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="/pages/Imagem-das-Categoria/Produtos_para_animais_companhia.webp" alt="" />
                                            <span>Produtos para animais de companhia</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="/pages/Imagem-das-Categoria/Produtos_panificação.jpg" alt="" />
                                            <span>Produtos de panificação</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="/pages/Imagem-das-Categoria/Fundamentos_despensas.png" alt="" />
                                            <span>Fundamentos da despensa</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </section>
            </S.ContainerComprePorCategoria>
        </>
    )
}

export default Categorias