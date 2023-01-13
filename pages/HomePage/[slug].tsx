// @ts-nocheck
import { ReactNode, useEffect, useState } from "react";
import { Header } from "../../src/components/Header";
import { api } from "../api/api";

import Link from "next/link";
import Image from "next/image";

import { Body, Container, ImageBox, Subtitle, Title } from "./styles";

export default function Page({ slug }) {
  console.log("primeiro", slug.data);

  const [data, setData] = useState(slug.data);
  const [error, setError] = useState();

  console.log("teste", slug?.data[0].id)

  /* <- Dynamic Img Src -> */
  const baseUrl = slug?.data[0].baseUrl;
  const UrlImg = slug?.data[0].l10n[0].image;
  const image = `${baseUrl}/${UrlImg}`;

  console.log(image)
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
            <Title>{slug?.data[0].l10n[0].title}</Title>
            <Subtitle>{slug?.data[0].l10n[0].description}</Subtitle>
            <ImageBox>
              <Image
                loader={myLoader}
                src={image}
                alt="Blog Picture"
                layout="fill"
              />
            </ImageBox>
            <Body
              dangerouslySetInnerHTML={{
                __html: slug?.data[0].l10n[0].bodies[0].text
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
  //   const allBlogs = await fetch(
  //   "https://posts2-api.global.ssl.fastly.net/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt"
  //  );
  //   const data = await allBlogs.json();

  //  const paths = data.data.map((obj) => ({ params: { slug: obj.l10n.slug } }));

  //  return { paths, fallback: false };

  const response = await fetch(
    "https://posts2-api.global.ssl.fastly.net/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt"
  );
  const data = await response.json();

  //  const paths = Array<string | data.data.map((obj) => {
  //    {
  //      console.log(obj);
  //    }
  //   return {
  //      params: {
  //        slug: obj.l10n.slug,
  //      },
  //    };
  //  })>

  return {
    paths: [
      // String variant:
      "/HomePage/o-que-fazer-no-mes-do-natal",
      // Object variant:
      {
        params: {
          slug: "eua-vao-comecar-a-vender-carne-criada-em-laboratorio",
        },
      },
    ],
    fallback: false,
  };
}
