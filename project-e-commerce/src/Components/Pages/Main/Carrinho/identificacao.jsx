import Header from "../../Header/header"
import Footer from "../../../Pages/Main/Footer/Footer"
import NavBarCarrinho from "./navbarcarrinho"
import HeaderCarrinho from "./headercarrinho"
import * as S from "./style"

function Identificacao() {
    return (
        <>
            <Header />
            <HeaderCarrinho />
            <S.ContainerCarrinho>
                <div class="main__carrinho-container">
                    <NavBarCarrinho />
                </div>
                <div class="titulo__carrinho">
                    <h1>Identificação</h1>
                </div>
                <div class="form__indentificacao-container">
                    <form>
                        <div class="identivicacao__input">
                            <input type="text" name="" id="" placeholder="Nome Completo" />
                        </div>
                        <div class="identivicacao__input">
                            <div class="endereco_numero">
                                <input class="endereco" type="text" name="" id="" placeholder="Endereço" />
                                <input class="numero" type="text" name="" id="" placeholder="N" />
                            </div>
                        </div>
                        <div class="identivicacao__input">
                            <div class="bairo_complemento">
                                <input type="text" name="" id="" placeholder="Bairo" />
                                <input type="text" name="" id="" placeholder="Compĺemento" />
                            </div>
                        </div>
                        <div class="identivicacao__input">
                            <div class="cidade_estado_cep">
                                <input type="text" name="" id="" placeholder="Cidade" />
                                <select id="estado" name="estado" >
                                    <option value="Selecione seu estado" selected disabled >Selecione seu estado</option>
                                    <option value="Acre (AC)">Acre (AC)</option>
                                    <option value="Alagoas (AL)">Alagoas (AL)</option>
                                    <option value="Amapá (AP)">Amapá (AP)</option>
                                    <option value="Amazonas (AM)">Amazonas (AM)</option>
                                    <option value="Bahia (BA)">Bahia (BA)</option>
                                    <option value="Ceará (CE)">Ceará (CE)</option>
                                    <option value="Distrito Federal (DF)">Distrito Federal (DF)</option>
                                    <option value="Espírito Santo (ES)">Espírito Santo (ES)</option>
                                    <option value="Goiás (GO)">Goiás (GO)</option>
                                    <option value="Maranhão (MA)">Maranhão (MA)</option>
                                    <option value="Mato Grosso (MT)">Mato Grosso (MT)</option>
                                    <option value="Mato Grosso do Sul (MS)">Mato Grosso do Sul (MS)</option>
                                    <option value="Minas Gerais (MG)">Minas Gerais (MG)</option>
                                    <option value="Pará (PA)">Pará (PA)</option>
                                    <option value="Paraíba (PB)">Paraíba (PB)</option>
                                    <option value="Paraná (PR)">Paraná (PR)</option>
                                    <option value="Pernambuco (PE)">Pernambuco (PE)</option>
                                    <option value="Piauí (PI)">Piauí (PI)</option>
                                    <option value="Rio de Janeiro (RJ)">Rio de Janeiro (RJ)</option>
                                    <option value="Rio Grande do Norte (RN)">Rio Grande do Norte (RN)</option>
                                    <option value="Rio Grande do Sul (RS)">Rio Grande do Sul (RS)</option>
                                    <option value="Rondônia (RO)">Rondônia (RO)</option>
                                    <option value="Roraima (RR)">Roraima (RR)</option>
                                    <option value="Santa Catarina (SC)">Santa Catarina (SC)</option>
                                    <option value="São Paulo (SP)">São Paulo (SP)</option>
                                    <option value="Sergipe (SE)">Sergipe (SE)</option>
                                    <option value="Tocantins (TO)">Tocantins (TO)</option>
                                </select>
                                <input type="text" name="" id="" placeholder="CEP" />
                            </div>
                        </div>
                        <div class="identivicacao__input">
                            <input type="tel" name="" id="" placeholder="Telefone" />
                        </div>
                    </form>
                    <div class="form__buutton">
                        <a href="./pagamento.html">Continuar</a>
                    </div>
                </div>
            </S.ContainerCarrinho>
            <Footer />
        </>
    )
}

export default Identificacao