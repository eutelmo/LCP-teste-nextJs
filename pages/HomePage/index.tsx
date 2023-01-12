// @ts-nocheck
import { ReactNode, useEffect, useState } from "react";
import { Header } from "../../src/components/Header";
import { api } from "../api/api";

import Link from "next/link";

import { Body, Container, ImageBox, Subtitle, Title } from "./styles";

import dynamic from "next/dynamic";

export async function getStaticProps() {
  let urlWithFilter =
    "/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt&filter[metadata.url]=criancas-que-jogam-videojogos-revelam-um-melhor-desempenho-cognitivo";

  let url =
    "https://posts2-api.global.ssl.fastly.net/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt&filter[metadata.url]=criancas-que-jogam-videojogos-revelam-um-melhor-desempenho-cognitivo";
  //const data = await api.get(urlWithFilter);

  const data = await fetch("https://posts2-api.global.ssl.fastly.net/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt&filter[metadata.url]=criancas-que-jogam-videojogos-revelam-um-melhor-desempenho-cognitivo");

  const page = await data.json();

  return {
    props: { pages: page.results },
  };

  console.log(pages);
}


export function HomePage({ pages }) {
  const [data, setData] = useState();
  const [error, setError] = useState();

 // console.log(pages);

  return (
    <>
      <Header />
      {!data ? (<div>Loading…</div>):(

      <Container>1</Container>
      )}
    </>
  );
}


