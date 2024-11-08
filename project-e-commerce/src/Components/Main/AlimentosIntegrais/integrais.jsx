import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import * as S from "./style";

export default function AlimentosIntegrais() {
    return (
        <>
            <h1>Alimentos Integrais</h1>
            <S.Card>
                <CardHeader>Card header</CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                    <CardTitle>Lorem Ipsum</CardTitle>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button>Read more &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
            </S.Card>
        </>
    )
}