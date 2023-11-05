import Head from "next/head";
import sites from "~/assets/sites";
import Footer from "~/components/Footer";
import Site, { type SiteProps } from "~/components/Site";
import Support from "~/components/Support";
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
      <main className="relative flex min-h-screen flex-col items-center font-sans">
        <TitleBar></TitleBar>
        <div className=""></div>
        <ul className="mt-32">
          {sites.map((site: SiteProps, idx: number) => (
            <Site
              key={idx}
              url={site.url}
              label={site.label}
              dataTip={site.dataTip}
            ></Site>
          ))}
        </ul>
        <div className="my-8 flex"></div>
        <Support></Support>
        <Footer></Footer>
      </main>
    </>
  );
}
