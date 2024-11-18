import Header from "../Header/header"
import { Card } from "../Main/Home/style"
import * as S from "./style"
import * as Ss from "../Main/Home/style"
import Cards from "../Main/Cards/Cards"

function AltaProteina(){
    return(
        <>
        <Header />
        <S.ContainerComprePorCategoria>
        <section class="compre_por_categoria">
       <div class="compre__conteudo-container">
          <div class="compre_produto">
            <div class="compre_produto-links">

                <form action="#">
                    <div class="produto-links" >
                        <div class="produto-links-Tit" id="produto-links-Tit">
                            <a href="">Comprar por ingredientes</a>
                            <i class="bi bi-check-lg button1"></i>
                        </div>
                        <ul id="menu_ul1">
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" /> 
                                    <span class="lista-titulos">Baixo teor de sódio (34)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span class="lista-titulos">Alta Proteína (154)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span class="lista-titulos">Orgânico (37)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span class="lista-titulos">Alta Fibra (60)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span class="lista-titulos">Sem glúten (62)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span class="lista-titulos">Zero Gordura Saturada (75)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span class="lista-titulos">Baixos Conservantes (28)</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="produto-links">
                        <div class="produto-links-Tit">
                            <a href="">Categorias</a>
                            <i class="bi bi-check-lg button2"></i>
                        </div>
                        <ul class="categoria__lista-link" id="menu_ul2">
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Bacon, churrasco e cachorro-quente (1)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Hambúrgueres, hambúrgueres e costeletas (4)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Produtos enlatados (4)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Guloseimas para cães (2)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Moído, picado e esfarelado (3)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Carne de Cogumelo (10)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Essenciais da despensa (2)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Massas e Raviólis (1)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Carne de porco e cordeiro (7)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Fatias e Salsichas (6)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Lanches (5)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Lanches e aperitivos (8)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Tofu, Seitan e Jaca (3)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Comida vegana para cães (1)</span>
                                </a>
                            </li>                  
                        </ul>
                    </div>
                    
                    <div class="produto-links">
                        <div class="produto-links-Tit">
                            <a href="">Marca</a>
                            <i class="bi bi-check-lg button3"></i>
                        </div>
                        <ul class="marca__lista-link" id="menu_ul3">
                            <li>
                                <a href="" class="lista__link"> /
                                    <input type="checkbox" name="" id="" />
                                    <span>Uma dúzia de primos (1)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Açougueiro do Abade (1)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Acremade (2)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Alimentos Alfa (1)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Ami (3)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Amy (8)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Colheita Antiga (1)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Annie Chun (2)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Artesã (2)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Banza (2)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Pé de feijão (1)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Além da Carne (6)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>UBS Fit (1)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Alimentos da Grande Montanha (2)</span>
                                </a>
                            </li>
                            <li>
                                <a href="" class="lista__link">
                                    <input type="checkbox" name="" id="" />
                                    <span>Moinho Vermelho de Bob (1)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
          </div>

          <div class="leaude__categoria-contaeiner">
            <div class="leaude__categoria-conteudo">
                <span><a href="../catogoria0.html">Inicio</a> / Escolhas veganas caseiras sem / <a href="">caseiras com alto teor de proteína</a></span>
                <h1>Escolhas veganas ricas em proteínas</h1>
                <p>Optar por uma alimentação vegana rica em proteínas é possível e benéfico. Leguminosas como lentilhas e grão-de-bico, produtos de soja como tofu e tempeh, grãos como quinoa e amaranto, além de nozes, sementes e manteigas de nozes são excelentes fontes de proteína. Substitutos de carne à base de plantas e vegetais como espinafre e brócolis também ajudam a garantir uma dieta equilibrada e nutritiva. Essas opções asseguram uma alimentação vegana completa e saudável.</p>
            </div>
           
            <div class="leuade__produto-categoria">
                <Ss.CardInputs>
                   <Cards />
                   <Cards />
                   <Cards />
                   <Cards />
                </Ss.CardInputs>
            </div>
        </div>

       </div>
    </section>
        </S.ContainerComprePorCategoria>
        </>
    )
}

export default AltaProteina