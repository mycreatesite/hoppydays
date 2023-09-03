type Props = {
  color: string;
};

const LogoX = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>X (Twitter)</title>
      <mask
        id="mask0_122_179"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <path d="M19.5599 0H0V20H19.5599V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_122_179)">
        <path
          d="M11.6408 8.46429L18.9224 0H17.1969L10.8743 7.34942L5.82442 0H0L7.63638 11.1136L0 19.9897H1.72561L8.40246 12.2285L13.7355 19.9897H19.5599L11.6404 8.46429H11.6408ZM9.27734 11.2115L8.50362 10.1049L2.34737 1.29901H4.9978L9.96597 8.40562L10.7397 9.51229L17.1977 18.7498H14.5473L9.27734 11.212V11.2115Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
export default LogoX;
