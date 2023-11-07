import { NextSeo } from "next-seo";
import FvBg from "@/components/modules/FvBg";
import styles from "@/styles/pages/404.module.scss";

export default function ErrorPage() {
  const PAGE_TITLE = "404 | お探しのページがみつからないです。すんません。";

  return (
    <>
      <NextSeo
        title={`${PAGE_TITLE} │ ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        noindex={true}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/recommend`,
          title: `${PAGE_TITLE} │ ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        }}
      />
      <FvBg fvBgClass="underPage" />
      <div className={`${styles.content}`}>
        <h1 className={`${styles.title}`}>
          <svg
            width="555"
            height="288"
            viewBox="0 0 555 288"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="js-scrollAddClass"
          >
            <path
              d="M113.213 27.259L115.459 37.1885L17.7209 198.425L16.9029 192.275L135.036 184.014C145.589 183.277 152.181 181.393 154.814 178.364C157.43 175.078 159 169.795 159.525 162.517L166.088 162.058C166.97 174.669 167.774 184.312 168.499 190.985C169.224 197.659 170.042 203.809 170.953 209.435C169.116 209.046 166.138 208.996 162.02 209.284C158.141 209.296 153.491 209.363 148.068 209.483C142.645 209.604 136.974 209.871 131.054 210.285C125.135 210.699 119.215 211.113 113.296 211.527L0.566911 219.41L0 211.303L113.213 27.259ZM119.389 26.827L137.477 285.485L106.592 287.645L91.3664 69.9088L113.213 27.259L119.389 26.827Z"
              fill="#222222"
              className={`${styles.el1}`}
            ></path>
            <path
              d="M274.253 15.9979C292.526 14.7201 308.909 17.8419 323.401 25.3634C338.132 32.6094 350.018 43.5459 359.058 58.1729C368.099 72.8 373.339 90.4083 374.779 110.998C376.218 131.588 373.396 150.406 366.312 167.454C359.21 184.244 348.657 197.914 334.653 208.463C320.888 218.736 304.225 224.556 284.665 225.924C266.906 227.166 250.661 224.164 235.93 216.918C221.18 209.414 209.157 198.358 199.859 183.749C190.801 168.865 185.552 151.128 184.112 130.538C182.69 110.206 185.402 91.6532 192.246 74.8809C199.348 58.0905 209.902 44.4211 223.906 33.8725C237.91 23.3239 254.693 17.3657 274.253 15.9979ZM271.264 23.1899C254.792 24.3418 241.764 34.0462 232.178 52.3034C222.849 70.5425 219.283 95.3618 221.479 126.761C223.098 149.925 227.106 168.395 233.5 182.173C239.877 195.693 247.794 205.355 257.252 211.159C266.967 216.946 277.101 219.47 287.653 218.732C304.383 217.562 317.411 207.858 326.74 189.619C336.05 171.122 339.608 146.174 337.412 114.775C335.792 91.6114 331.794 73.2696 325.417 59.7495C319.023 45.972 311.105 36.3097 301.665 30.7627C292.208 24.9583 282.074 22.4341 271.264 23.1899Z"
              fill="#222222"
              className={`${styles.el2}`}
            ></path>
            <path
              d="M496.857 0.431932L499.103 10.3614L401.365 171.598L400.547 165.448L518.681 157.187C529.233 156.45 535.826 154.566 538.459 151.537C541.074 148.251 542.644 142.968 543.17 135.69L549.733 135.231C550.615 147.842 551.418 157.485 552.144 164.158C552.869 170.832 553.687 176.982 554.598 182.608C552.76 182.219 549.782 182.169 545.664 182.457C541.786 182.469 537.135 182.536 531.712 182.656C526.289 182.777 520.618 183.044 514.699 183.458C508.779 183.872 502.86 184.286 496.94 184.7L384.211 192.583L383.644 184.476L496.857 0.431932ZM503.034 0L521.121 258.658L490.236 260.818L475.011 43.0817L496.857 0.431932L503.034 0Z"
              fill="#222222"
              className={`${styles.el3}`}
            ></path>
          </svg>
        </h1>
        <p className={`${styles.message}`}>
          お探しのページがみつからないです。
          <br />
          すんません。
        </p>
      </div>
    </>
  );
}