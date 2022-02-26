import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContentListWrap from "../components/ContentList/ContentListWrap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Watcha Pedia Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/Nav">
        <a>네비게이션</a>
      </Link>
      <ContentListWrap />
    </div>
  );
}
