// @ts-nocheck
import { Inter } from "@next/font/google";
import Link from "next/link";

import { Header } from "../src/components/Header";
import { Container, Title } from "./styles";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const data = await fetch(
    "https://posts2-api.global.ssl.fastly.net/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt"
  );

  const page = await data.json();

  return {
    props: { page },
  };
}

export default function Home({ page }) {
  console.log("prop", page);

  return (
    <>
      <Header />
      <Container>
        {page.slug ? (
          <Title>Loading…</Title>
        ) : (
          <>
            {page.data.map((pages) => {
              return (
                <ul key={pages.id}>
                  <li>
                    {pages.l10n.map((e) => {
                      return (
                        <>
                          <Link href={`${e.slug}`}>{e.title}</Link>
                        </>
                      );
                    })}
                  </li>
                </ul>
              );
            })}
          </>
        )}
      </Container>
    </>
  );
}
