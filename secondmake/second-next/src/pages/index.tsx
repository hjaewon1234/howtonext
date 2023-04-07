import Head from "next/head";
import { Inter } from "next/font/google";
import Seo from "@/components/Seo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Seo title="안녕하세요" />
    </>
  );
}
