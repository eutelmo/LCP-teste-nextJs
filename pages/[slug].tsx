// @ts-nocheck
import { Header } from "../src/components/Header";
import { api } from "./api/api";

import Link from "next/link";
import Image from "next/image";

import { Body, Container, ImageBox, Subtitle, Title } from "./styles";

export default function Page({ slug }) {
  /* <- Dynamic Img Src -> */
  const baseUrl = slug?.data[0].baseUrl;
  const UrlImg = slug?.data[0].l10n[0].image;
  const image = `${baseUrl}/${UrlImg}`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  /* <- Function src for NextImg -> */
  const myLoader = ({ quality }) => {
    return `${slug?.data[0].baseUrl}/${slug?.data[0].l10n[0].image}`;
  };

  return (
    <>
      <Header />
      <Container>
        {!slug ? (
          <Title>Loading…</Title>
        ) : (
          <>
            <Title>{slug?.data[0].l10n[0].title}</Title>
            <Subtitle>{slug?.data[0].l10n[0].description}</Subtitle>
            <ImageBox>
              <Image
                src={image}
                loader={myLoader}
                alt="Blog Picture"
                fill
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA..."
              />
            </ImageBox>

            <Body
              dangerouslySetInnerHTML={{
                __html: slug?.data[0].l10n[0].bodies[0].text,
              }}
            />
          </>
        )}
      </Container>
    </>
  );
}

/* <- Dynamic Slug -> */

export async function getStaticProps({ params }) {
  const slug = await fetch(
    `https://posts2-api.global.ssl.fastly.net/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt&filter[metadata.url]=${params.slug}`
  )
    .then((resonseObject) => {
      if (resonseObject.ok) {
        return resonseObject.json();
      }

      throw new Error(":/");
    })
    .then((resonseObject) => resonseObject);

  return {
    props: {
      slug,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://posts2-api.global.ssl.fastly.net/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt"
  );
  const data = await response.json();

  return {
    paths: [
      {
        params: {
          slug: "eua-vao-comecar-a-vender-carne-criada-em-laboratorio",
        },
      },
    ],
    fallback: true,
  };
}
