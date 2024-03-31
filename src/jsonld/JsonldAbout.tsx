import { ProfilePageJsonLd } from "next-seo";

type Props = {
  name: string;
};

const JsonldAbout = ({name}:Props) => {
  return (
    <ProfilePageJsonLd
      lastReviewed="2023-10-01T00:00:00+09:00"
      breadcrumb={[
        {
          position: 1,
          name,
          item: `${process.env.NEXT_PUBLIC_SITE_URL}/about`
        }
      ]}
    />
  );
};
export default JsonldAbout;