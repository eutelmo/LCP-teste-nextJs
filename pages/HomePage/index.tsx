// @ts-nocheck
import { ReactNode, useEffect, useState } from "react";
import { Header } from "../../src/components/Header";
import { api } from "../api/api";

import { Body, Container, ImageBox, Subtitle, Title } from "./styles";

interface HomePageProps {
  children: ReactNode;
}

export function HomePage() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const getAllData = async (e) => {
    try {
      let url = `/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt`;
      if (e) {
        url += `&filter[metadata.url]=criancas-que-jogam-videojogos-revelam-um-melhor-desempenho-cognitivo`;
      }
      const { data } = await api.get(url);
      setData(data);
    } catch (error: any) {
      setError(error);
    }
  };

  //info -> data.dossiers.l10n

  //console.log(data);
  console.log(data.dossiers.l10n);

  useEffect(() => {
    getAllData();
  }, []);

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
          <p>12323</p>
        </Body>
      </Container>
    </>
  );
}
