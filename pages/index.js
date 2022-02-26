import Head from "next/head";
import Image from "next/image";
import Card from "../components/MovieHome/Card";
import Label from "../components/Label";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Watcha Pedia Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Label />
      <Card />
    </div>
  );
}
