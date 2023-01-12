// @ts-nocheck
import { ReactNode, useEffect, useState } from "react";
import { Header } from "../../src/components/Header";
import { api } from "../api/api";

import { Body, Container, ImageBox, Subtitle, Title } from "./styles";

export async function getStaticProps(context) {
  const { params } = context;

  let urlWithFilter = `/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt&filter[metadata.url]=${params.pageId}`;

  const data = await api.get(urlWithFilter);

  const page = await data.json();
}

export async function getStaticPaths(e) {
  let url = `/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt`;
  if (e) {
    url += `&filter[metadata.url]=criancas-que-jogam-videojogos-revelam-um-melhor-desempenho-cognitivo`;
  }
  const response = await api.get(url);
  const data = await response.json();

  const paths = data.map((page) => {
    return {
      params: {
        pageId: `${page.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export function HomePage({ page }) {
  console.log(page)
  return (
    <>
      <Header />
      <Container>
        <Title>
          Crianças que jogam videojogos revelam um melhor desempenho cognitivo
        </Title>

        <Subtitle>
          Novo estudo analisou o impacto dos videojogos no desenvolvimento
          cognitivo do cérebro adolescente. “As descobertas levantam a
          interessante possibilidade de que os videojogos fornecem uma
          experiência de aprendizagem cognitiva com efeitos neurocognitivos
          mensuráveis”, afirmam os investigadores.
        </Subtitle>

        <ImageBox>IMG</ImageBox>

        <Body>
          <p>3</p>
        </Body>
      </Container>
    </>
  );
}
