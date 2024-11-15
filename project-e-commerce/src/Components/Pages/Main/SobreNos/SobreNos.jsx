import { useNavigate } from "react-router-dom"
import Header from "../../Header/header"
import Footer from "../../Main/Footer/Footer"
import * as S from "./style"

function SobreNos() {
    const navigate = useNavigate()

    function VoltarHome() {
        navigate("/home");
    }

    return (
        <>
            <Header />
            <S.Sobrenos>
                <div class="sobre_nos">
                    <div class="sobre_nos-leude">
                        <span><a onClick={VoltarHome}>Home/ </a>Sobre Nós</span>
                        <h1>Sobre Nos</h1>
                        <p>O Vegano Naturais, foi fundado em 2024.</p>
                    </div>
                </div>
                <div class="sobre__nos-container">
                    <h1>O Vegano Naturais, foi fundado em 2024.</h1>
                    <div class="sobre_nos-conteudo">
                        <h1>Nossa História</h1>
                        <p>O Vegano Naturais, foi fundado em 2024 com o objetivo de oferecer alimentos veganos deliciosos e acessíveis para todos. Iniciamos nossa jornada com uma pequena seleção de produtos, e hoje temos orgulho de ser uma referência no mercado de comidas veganas, com uma vasta gama de opções que satisfazem todos os gostos.
                        </p>
                    </div>
                    <div class="sobre_nos-conteudo">
                        <h1>Missão</h1>
                        <p>
                            Nossa missão é promover um estilo de vida saudável e sustentável, oferecendo produtos veganos de alta qualidade que respeitam os animais, o meio ambiente e a saúde dos nossos clientes.
                        </p>
                    </div>
                    <div class="sobre_nos-conteudo">
                        <h1>Visão</h1>
                        <p>
                            Acreditamos em um futuro onde todos possam desfrutar de alimentos saborosos e nutritivos sem causar danos aos animais e ao meio ambiente. Queremos ser líderes na transformação do mercado alimentício para opções mais sustentáveis e éticas.
                        </p>
                    </div>
                    <div class="sobre_nos-conteudo">
                        <h1>Nossos Valores</h1>
                        <p>
                            Sustentabilidade: Compromisso com práticas que minimizam o impacto ambiental.
                            Compaixão: Respeito por todos os seres vivos.
                            Qualidade: Oferecer apenas produtos que atendem aos mais altos padrões de qualidade.
                        </p>
                    </div>
                    <div class="sobre_nos-conteudo">
                        <h1>Nossa Equipe</h1>
                        <p>Gerente: Leidiane</p>
                        <p>Gerente: Pedro Damiao</p>
                    </div>
                    <div class="sobre_nos-conteudo">
                        <h1>Agradecimento da Equipe</h1>
                        <p>
                            Nós, da equipe Vegano Naturais, gostaríamos de expressar nossa profunda gratidão a todos os nossos clientes, parceiros e apoiadores. Sem vocês, nossa missão de promover um estilo de vida saudável e sustentável não seria possível.
                        </p>
                        <p>
                            Agradecemos por confiar em nossos produtos e por fazer parte desta jornada conosco. Cada compra, cada feedback e cada palavra de incentivo são extremamente valiosos para nós. Juntos, estamos fazendo a diferença, um prato vegano de cada vez.
                        </p>
                        <p>
                            Com carinho e gratidão,
                            Equipe: vegan@gmail.com
                        </p>
                    </div>
                </div>
            </S.Sobrenos>
            <Footer />
        </>
    )
}

export default SobreNos