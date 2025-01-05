import { NextSeo } from "next-seo";
import Link from "next/link";
import ArticleGeneralPage from "@/components/templates/ArticleGeneralPage";
import JsonldAbout from "@/jsonld/JsonldAbout";
import LogoX from "@/components/elements/LogoX";
import styles from "@/styles/pages/About.module.scss";

export default function About() {

  const PAGE_TITLE = "HOPPY DAYSについて";

  return (
    <>
      <NextSeo
        title={`${PAGE_TITLE} │ ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
          title: `${PAGE_TITLE} │ ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        }}
      />
      <JsonldAbout name={PAGE_TITLE} />
      <ArticleGeneralPage
        heading={{ first: "Abo", second: "ut" }}
        headingJa={PAGE_TITLE}
      >
        <div className={`${styles.aboutContent}`}>
          <section>
            <h2>サイト管理人より</h2>
            <p>こんにちは。<br/>東京都在住のWEBデザイナー、ma-ya&apos;s CREATE&#xff3b;まーやずくりえいと&#xff3d;と申します。</p>
            <p>ホッピーとつまみとうさぎを愛するおじさんデザイナーです。</p>
            <p>「HOPPY DAYS」はぼくの独断と偏見に基づいて構築したホッピーのファンサイトのようなものです。</p>
            <p>このサイトでは個人的におすすめのホッピー居酒屋（ホッピーを取り扱う居酒屋）の紹介や、ホッピーと過ごした日々の記録をゆるく綴っています。</p>
            <p>「お前のおすすめとか日常なんて興味ねえよ」と思った方、ごめんなさい。そっとページを閉じて頂ければ幸いです。</p>
            <p><Link href={`https://www.hoppy-happy.com/`} target="_blank" rel="noopener noreferrer">ホッピービバレッジ株式会社</Link>に敬意と愛を込めて。</p>
          </section>
          <section>
            <h2>サイト受賞・掲載歴</h2>
            <p><Link href={`https://www.awwwards.com/sites/hoppy-days`} target="_blank" rel="noopener noreferrer">Awwwards</Link> - Honorable Mention</p>
            <p><Link href={`https://www.cssdesignawards.com/sites/hoppy-days/44858/`} target="_blank" rel="noopener noreferrer">CSS Design Awards</Link> - SPECIAL KUDOS</p>
            <p><Link href={`https://www.aaa11y.com/675673ca9ece26765ca449ce/`} target="_blank" rel="noopener noreferrer">AAA11Y</Link> - Accessible Website Gallery</p>
          </section>
          <section>
            <h2>SNS</h2>
            <p>
              <Link href={`https://twitter.com/hello_myscreate`} target="_blank" rel="noopener noreferrer">
                <LogoX/>
              </Link>
            </p>
          </section>
          <section>
            <h2>ポートフォリオ</h2>
            <p><Link href={`https://myscreate.com/`} target="_blank" rel="noopener noreferrer">ma-ya&apos;s CREATE</Link> (メイン)</p>
            <p><Link href={`https://wicd-02-next.vercel.app/`} target="_blank" rel="noopener noreferrer">WHAT I CAN DO.</Link> (サブ)</p>
          </section>

        </div>
      </ArticleGeneralPage>
    </>
  );
}
