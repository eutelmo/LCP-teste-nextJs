// @ts-nocheck
import { ReactNode, useEffect, useState } from "react";
import { Header } from "../../src/components/Header";
import { api } from "../api/api";

import Link from "next/link";

import { Body, Container, ImageBox, Subtitle, Title } from "./styles";

export async function getStaticProps(context) {
  const { params } = context;

  let urlWithFilter = `/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt&filter[metadata.url]=${params.pageId}`;

  const data = await api.get(urlWithFilter);

  const page = await data.json();
}

export async function getStaticPaths() {
  let url = `/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt`;
  if (e) {
    url += `&filter[metadata.url]=criancas-que-jogam-videojogos-revelam-um-melhor-desempenho-cognitivo`;
  }
  const response = await api.get(url);
  const data = await response.json();

  const paths = data.map((page) => {
    return {
      params: {
        pageId: `${page.dossiers.l10n}`,
      },
    };
  });

  return { paths, fallback: false };
}

export function HomePage({ page }) {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const getAllData = async () => {
    try {
      let url = `/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt&filter[metadata.url]=criancas-que-jogam-videojogos-revelam-um-melhor-desempenho-cognitivo`;

      const { data } = await api.get(url);
      setData(data);
    } catch (error: any) {
      setError(error);
    }
  };

  console.log(data.data[0].l10n[0]);

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title>
          {data.data[0].l10n[0].title}
        </Title>

        <Subtitle>
          {data.data[0].l10n[0].description}
        </Subtitle>

        <ImageBox>IMG</ImageBox>

        <Body>
          {data.data[0].l10n[0].bodies[0].text}
        </Body>
      </Container>
    </>
  );
}
