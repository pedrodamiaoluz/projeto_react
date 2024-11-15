import React from "react";
import * as S from "../Home/style";
import { useState } from 'react';


function Cards(props) {

    const [quantidade, setQuantidade] = useState();

    const handleChange = (event) => {
        setQuantidade(event.target.value);
    };

    return (
        <>
            <S.Card>
                <img src={props.src} />
        
                    <S.CardTitles>{props.titulo}</S.CardTitles>
                    <S.CardInputs>
                        <p>R$0,00</p>
                        <input
                            type="number"
                            id="quantidade"
                            name="quantidade"
                            value={quantidade}
                            onChange={handleChange}
                            min="0"
                            max="10"
                            step="1"
                            placeholder="0"
                            required
                        />
                    </S.CardInputs>
                    <S.Buttons>
                        <button className="buttons">
                            <p>Adicionar</p>
                        </button>
                    </S.Buttons>
            </S.Card>
        </>
    )
}

export default Cards