import { client } from "@/libs/client";
import { Recommend } from "@/types/recommend";
import { Nippo } from "@/types/nippo";
import SectionMainvisual from "@/components/templates/SectionMainvisual";
import SectionMessage from "@/components/templates/SectionMessage";
import SectionPost from "@/components/templates/SectionPost";
import Slider from "@/components/modules/Slider";
import JsonldTop from "@/jsonld/JsonldTop";

type Props = {
  recommends: Recommend[];
  nippos: Nippo[];
};

export default function Home({ recommends, nippos }: Props) {
  return (
    <>
      <JsonldTop />
      <SectionMainvisual />
      <SectionMessage />
      <SectionPost
        setting = {{
          sectionClass: "recommend",
          shoulder: "おすすめホッピー居酒屋",
          titleFirst: "Recom",
          titleSecond: "mend",
          linkURL: "recommend"
        }}
      >
        <Slider items={recommends} path="recommend"></Slider>
      </SectionPost>
      <SectionPost
        setting = {{
          sectionClass: "nippo",
          shoulder: "ホッピー日報",
          titleFirst: "Nip",
          titleSecond: "po",
          linkURL: "nippo"
        }}
      >
        <Slider items={nippos} path="nippo"></Slider>
      </SectionPost>
    </>
  );
}

export const getStaticProps = async () => {
  const recommendData = await client.get({
    endpoint: "recommend",
    queries: { limit: 3 },
  });
  const nippoData = await client.get({
    endpoint: "nippo",
    queries: { limit: 3 },
  });
  return {
    props: {
      recommends: recommendData.contents,
      nippos: nippoData.contents,
    },
  };
};
