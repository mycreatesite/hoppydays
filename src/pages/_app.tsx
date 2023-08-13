import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { scrollAddClass } from "@/components/util/scrollTriggerFunctions";
import { scrollParallaxLtR } from "../components/util/scrollTriggerFunctions";
import Layout from "@/components/layouts/Layout";
import "@acab/reset.css";
import "@/styles/globals.scss";
import { playfairDisplay } from "@/components/util/font";
import { sawarabiGothic } from "@/components/util/font";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {
    
    document.body.classList.add('is-ready');

    scrollAddClass();
    scrollParallaxLtR()

  }, [router.pathname]);

  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${playfairDisplay.style.fontFamily},
            ${sawarabiGothic.style.fontFamily}, serif;
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
