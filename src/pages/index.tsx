import Head from "next/head";
import sites from "~/assets/sites";
import Site, { type SiteProps } from "~/components/Site";
import TitleBar from "~/components/TitleBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>GCES Systems Status</title>
        <meta
          name="description"
          content="Systems Status - Gina-Cody School Entrepreneurship Society at Concordia University"
        />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <main className="flex min-h-screen flex-col items-center font-sans">
        <TitleBar></TitleBar>
        <ul>
          {sites.map((site: SiteProps, idx: number) => (
            <Site key={idx} url={site.url} label={site.label}></Site>
          ))}
        </ul>
      </main>
    </>
  );
}
