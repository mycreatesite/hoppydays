import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import type { AppProps } from "next/app";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { scrollAddClass } from "@/components/util/scrollTriggerFunctions";
import { scrollParallax } from "../components/util/scrollTriggerFunctions";
import { topPageBodyReady } from "@/components/util/topPageBodyReady";
import Layout from "@/components/layouts/Layout";
import "@acab/reset.css";
import "@/styles/globals.scss";
import { FontGlobal } from "@/components/util/FontGlobal";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  
  useEffect(() => {

    topPageBodyReady(router.pathname === "/");
    scrollAddClass();
    scrollParallax(".js-scrollParallax-bubble", "y", 150, -150);
    scrollParallax(".js-scrollParallax-post", "x", -50, 50);

    let matchMedia = gsap.matchMedia();
    matchMedia.add("(min-width: 769px)", () => {
      scrollParallax(".js-scrollParallax-mainLogo", "y", 0, 150, "20%", "0%");
    });
    console.log(matchMedia)
    
  }, [router.pathname]);

  return (
    <>
      <FontGlobal />
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
