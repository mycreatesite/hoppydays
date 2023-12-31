import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import type { AppProps } from "next/app";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { scrollAddClass } from "@/components/util/scrollTriggerFunctions";
import { scrollParallax } from "../components/util/scrollTriggerFunctions";
import Layout from "@/components/layouts/Layout";
import "@acab/reset.css";
import "@/styles/globals.scss";
import { FontGlobal } from "@/components/util/FontGlobal";
import TagManager from "react-gtm-module";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // animation
  useEffect(() => {
    scrollAddClass();
    scrollAddClass(".js-scrollAddClassFooter", "70%");
    scrollParallax(".js-scrollParallax-bubble", "y", 150, -150);
    scrollParallax(".js-scrollParallax-post", "x", -50, 50);

    let matchMedia = gsap.matchMedia();
    // min-width:tablet
    matchMedia.add("(min-width: 768px)", () => {
      scrollParallax(".js-scrollParallax-mainLogo", "y", 0, 100, "20%", "0%");
      scrollParallax(".js-scrollParallax-slideContainer", "x", 100, -100);
    });
  }, [router.pathname]);

  // GTM
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID as string });
  }, []);

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
