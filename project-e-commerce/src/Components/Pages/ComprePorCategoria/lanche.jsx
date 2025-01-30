import Header from "../Header/header"
import * as S from "./style"
import * as Ss from "../Main/Home/style"
import Footer from "../Main/Footer/Footer"
import bainner from "../../../assets/imagem/img-lanche/bainner-lanche.png"
import Cards from "../Main/Cards/Cards"
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router-dom"
import { ArrayCard } from "../../../assets/imagem/img-lanche/arry-img"


function Lanche() {

   const navigate = useNavigate()

   function Voltar() {
      navigate("/categoria");
   }
   return (
      <>
         <Header />
         <S.ContainerComprePorCategoria>
            <div class="container">
               <div class="leaude_contaeiner">
                  <section class="compre_por_categoria">
                     <div class="compre_por_categoria-leaude">
                        <div class="leaude_conteudo">
                           <span><a onClick={Voltar}>Inicio</a> / Lanches Veganos</span>
                           <h1>Lanches Veganos</h1>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odit perspiciatis atque recusandae, amet voluptate expedita itaque nisi rem, eligendi commodi nostrum omnis est, eaque maiores ex error odio porro!
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, temporibus? Aliquam, nam fugit asperiores delectus consequatur assumenda vel sed reiciendis deleniti Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quod debitis provident sint ipsa reprehenderit qui expedita tempora cumque. Accusamus sint itaque ea illum architecto quos odio ad similique enim.numquam? Quas at iure error commodi itaque consequuntur ratione.
                           </p>
                        </div>
                        <div class="leaude_img">
                           <img src={bainner} alt="" />
                        </div>
                     </div>
                  </section>
               </div>
            </div>
            <section class="compre_por_categoria">
               <div class="compre__container">
                  <div class="compre_produto">
                     <h2>Selecione uma categoria</h2>
                     <div class="compre_produto-links">

                        <details>
                           <summary><a href="../BaixoTeordeSodio/baixoteordesodio.html">Escolhas com baixo teor de sódio</a></summary>
                        </details>

                        <details>
                           <summary><a href="../AltaProteina/altaproteina.html">Alta proteína</a></summary>
                        </details>

                        <details>
                           <summary><a href="../NaoContemGlutem/naocontemglutem.html">Não contém gluten</a></summary>
                        </details>

                        <details>
                           <summary><a href="../CarneFrutosMar/carnefrutosmar.html">Carne e Frutos do Mar</a>  </summary>
                        </details>

                        <details>
                           <summary> <a href="../QueijoOvosLatcinios/queijoovoslaticinos.html">Queijo, Ovos e Laticínios</a></summary>
                        </details>

                        <details>
                           <summary><a href="../ChocolateDoce/chocolatedoce.html">Chocolate, Doces e Doces</a></summary>
                        </details>

                        <details open>
                           <summary><a class="lanche_style" href="">Lanches</a></summary>
                           <ul>
                              <li><a href="./vertodosprodutol.html">Batatas fritas, biscoitos e folhados</a></li>
                              <li><a href="./vertodosprodutol.html">Palitos de carne seca e carne seca</a></li>
                              <li><a href="./vertodosprodutol.html">Pretzels e pipoca</a></li>
                              <li><a href="./vertodosprodutol.html">Lanches doces e barras energéticas</a></li>
                           </ul>
                        </details>

                        <details>
                           <summary><a href="../ProdutosAnimais/produtoanimaiscompanhia.html">Produtos para animais de companhia</a></summary>
                        </details>

                        <details>
                           <summary><a href="./produtospanificacao.html">Produtos de panificação</a></summary>
                        </details>

                        <details>
                           <summary><a href="../FundamentosDespensa/fundamentodespensa.html">Fundamentos da despensa</a></summary>
                        </details>
                     </div>
                  </div>

                  <div class="compre__catedoria_produto">
                     <div class="compre__produto-liste">
                        <div class="produtos_titulo">
                           <h1>Batatas Fritas, Biscoitos e Folhados</h1>
                           <span><a href="./vertodosprodutol.html">Ver tudo</a><SlArrowRight /></span>
                        </div>
                     </div>
                     <Ss.CardInputs>
                        <div className="container_lanche-card__altaproteina">
                           {ArrayCard.map((item) => {
                              return (
                                 <>
                                  <Cards
                                    img={item.url}
                                    titulo={item.tex}
                                 />
                                 </>                        
                              )
                           })}
                        </div>
                     </Ss.CardInputs>
                  </div>
               </div>
            </section>
         </S.ContainerComprePorCategoria>
         <Footer />
      </>
   )
}

export default Lanche