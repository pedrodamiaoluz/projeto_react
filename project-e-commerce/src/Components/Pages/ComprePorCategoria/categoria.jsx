import { useNavigate } from "react-router-dom"
import Header from "../Header/header"
import * as S from "./style"
import Footer from "../Main/Footer/Footer"
import imgaltaproteina from "../../../assets/imagem/img-categorias/AltaProteina.jpg"
import imgbaixoteor from "../../../assets/imagem/img-categorias/baixo-teor-de-sodio.jpg"
import imgnaocluten from "../../../assets/imagem/img-categorias/nao-contem-cluten.jpg"
import imgcarne from "../../../assets/imagem/img-categorias/carne-fruto-do-mar.jpg"
import imgqueijo from "../../../assets/imagem/img-categorias/queijo.jpg"
import imgchocolate from "../../../assets/imagem/img-categorias/chocolate.png"
import imglanche from "../../../assets/imagem/img-categorias/lanche.jpg"
import imganimal from "../../../assets/imagem/img-categorias/p-animal.jpg"
import imgpanificacao from "../../../assets/imagem/img-categorias/p-panificacao.jpg"
import imgfundamentos from "../../../assets/imagem/img-categorias/dispensa.jpg"

function Categorias() {

    const navigate = useNavigate()

    function EntraAltaProteina(){
        navigate("/altaproteina");
    }

    function EntraLanche(){
        navigate("/lanche");
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
                                <a onClick={EntraLanche}>Lanches</a>
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
                                            <img src={imgcarne} alt="" />
                                            <span>Carne e Frutos do Mar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={imgqueijo} alt="" />
                                            <span>Queijo, Ovos e Laticínios</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={imgchocolate} alt="" />
                                            <span>Chocolate, Doces e Doces</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={imglanche} alt="" />
                                            <span>Lanches</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={imganimal} alt="" />
                                            <span>Produtos para animais de companhia</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={imgpanificacao} alt="" />
                                            <span>Produtos de panificação</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={imgfundamentos} alt="" />
                                            <span>Fundamentos da despensa</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </section>
            </S.ContainerComprePorCategoria>
            <Footer />
        </>
    )
}

export default Categorias