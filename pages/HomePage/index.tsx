import { ReactNode, useEffect, useState } from "react";
import { Header } from "../../src/components/Header";
import { api } from "../api/api";

import { Body, Container, ImageBox, Subtitle, Title } from "./styles";

interface HomePageProps {
  children: ReactNode;
}

export function HomePage() {
  const [data, setData] = useState();

  const getAllData = () => {
    api
      .get(
        "/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt&filter[metadata.url]=criancas-que-jogam-videojogos-revelam-um-melhor-desempenho-cognitivo"
      )
      .then((response) => {
        setData(response.data);
      });
  };

  console.log(data);

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
          <p>
            A investigação envolveu duas mil crianças entre os nove e os dez
            anos. Os participantes foram divididos em dois grupos: no primeiro,
            estavam os que nunca jogaram videojogos e, no segundo,
            encontravam-se as crianças que jogavam diariamente três ou mais
            horas.
          </p>
          <p>
            A investigação envolveu duas mil crianças entre os nove e os dez
            anos. Os participantes foram divididos em dois grupos: no primeiro,
            estavam os que nunca jogaram videojogos e, no segundo,
            encontravam-se as crianças que jogavam diariamente três ou mais
            horas.
          </p>
        </Body>
      </Container>
    </>
  );
}
