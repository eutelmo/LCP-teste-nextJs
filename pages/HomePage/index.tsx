import { ReactNode } from "react";
import { Header } from "../../src/components/Header";

import { Body, Container, ImageBox, Subtitle, Title } from "./styles";

interface HomePageProps {
  children: ReactNode;
}

export function HomePage() {
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
          <p>A investigação envolveu duas mil crianças entre os nove e os dez anos.
          Os participantes foram divididos em dois grupos: no primeiro, estavam
          os que nunca jogaram videojogos e, no segundo, encontravam-se as
          crianças que jogavam diariamente três ou mais horas.</p>
          <p>A investigação envolveu duas mil crianças entre os nove e os dez anos.
          Os participantes foram divididos em dois grupos: no primeiro, estavam
          os que nunca jogaram videojogos e, no segundo, encontravam-se as
          crianças que jogavam diariamente três ou mais horas.</p>
        </Body>
        
      </Container>
    </>
  );
}
