// @ts-nocheck
import { ReactNode, useEffect, useState } from "react";
import { Header } from "../../src/components/Header";
import { api } from "../api/api";

import Link from "next/link";
import Image from "next/image";

import { Body, Container, ImageBox, Subtitle, Title } from "./styles";

export function Page({ slug }) {
  console.log(slug);

  const [data, setData] = useState(slug);
  const [error, setError] = useState();

  /* <- Dynamic Img Src -> */
  const baseUrl = data?.data[1].baseUrl;
  const UrlImg = data?.data[1].l10n[0].image;
  const image = `${baseUrl}/${UrlImg}`;

  /* <- Function src for NextImg -> */
  const myLoader = ({ src }) => {
    return image;
  };

  return (
    <>
      <Header />
      <Container>
        {!slug ? (
          <Title>Loading…</Title>
        ) : (
          <>
            <Title>{data.data[1].l10n[0].title}</Title>
            <Subtitle>{data?.data[1].l10n[0].description}</Subtitle>
            <ImageBox>
              <Image
                loader={myLoader}
                src={image}
                alt="Picture of the author"
                layout="fill"
              />
            </ImageBox>
            <Body
              dangerouslySetInnerHTML={{
                __html: data?.data[1].l10n[0].bodies[0].text,
              }}
            />
          </>
        )}
      </Container>
    </>
  );
}

/* <- Dynamic Slug -> */

export async function getStaticProps(context) {

  const { params } = context

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
    'https://posts2-api.global.ssl.fastly.net/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt'
  )
  const data = await response.json()

  const paths = data.map((slug) => {
    {console.log(slug)}
    return {
      params: {
        slug: `${slug.data.id}`,
      },
    }
  })

  return { paths, fallback: false }
}
