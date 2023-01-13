// @ts-nocheck
import { Inter } from "@next/font/google";
import { HomePage } from "./HomePage/[slug]";
import { Header } from "../src/components/Header";


const inter = Inter({ subsets: ["latin"] });

export default function Home({ slug }) {
  return (
    <>
      <Header />
      teste
    </>
  );
}


export async function getStaticProps({ params }) {

  const data = await fetch(
    `https://posts2-api.global.ssl.fastly.net/1/posts?apikey=br7rqAj1hIO2XdNR&apitoken=a13zjd512nszxose&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt`
  )

  const slug = await data.json()

  return {
    props: { slug },
  }
}