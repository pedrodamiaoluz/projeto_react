import React from "react";
import {
    CardImg,
    CardBody,
    Button
} from "shards-react";
import * as S from "../AlimentosIntegrais/style";
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
                <CardBody>
                    <S.CardTitle>{props.titulo}</S.CardTitle>
                    <S.CardInput>
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
                    </S.CardInput>
                    <S.CardButton>
                        <Button className="button">
                            <p>Carrinho</p>
                        </Button>
                    </S.CardButton>
                </CardBody>
            </S.Card>
        </>
    )
}

export default Cards