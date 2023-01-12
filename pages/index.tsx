import { Inter } from "@next/font/google";
import { HomePage } from "./HomePage/[pageName]";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePage/>
    </>
  );
}
