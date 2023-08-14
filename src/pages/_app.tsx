import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { scrollAddClass } from "@/components/util/scrollTriggerFunctions";
import { scrollParallax } from "../components/util/scrollTriggerFunctions";
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
    scrollParallax(".js-scrollParallax-mainLogo", "y", 0, 100, "20%", "0%");
    scrollParallax(".js-scrollParallax-message", "y", -200, 100);
    scrollParallax(".js-scrollParallax-bubble", "y", 0, -200);
    scrollParallax(".js-scrollParallax-post", "x", -50, 50);
    scrollParallax(".js-scrollParallax-footer", "x", -35, 15);

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
