import * as React from "react";
import type { SVGProps } from "react";
const SvgGeneral2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#general2_svg__a)">
      <path
        fill="#03010C"
        d="M15.833 3.333h-.916A4.174 4.174 0 0 0 10.833 0H9.167a4.174 4.174 0 0 0-4.084 3.333h-.916A4.17 4.17 0 0 0 0 7.5v8.333A4.17 4.17 0 0 0 4.167 20h11.666A4.17 4.17 0 0 0 20 15.833V7.5a4.17 4.17 0 0 0-4.167-4.167M9.167 1.667h1.666a2.5 2.5 0 0 1 2.347 1.666H6.82a2.5 2.5 0 0 1 2.347-1.666M4.167 5h11.666a2.5 2.5 0 0 1 2.5 2.5V10H1.667V7.5a2.5 2.5 0 0 1 2.5-2.5m11.666 13.333H4.167a2.5 2.5 0 0 1-2.5-2.5v-4.166h7.5v.833a.833.833 0 0 0 1.666 0v-.833h7.5v4.166a2.5 2.5 0 0 1-2.5 2.5"
      />
    </g>
    <defs>
      <clipPath id="general2_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGeneral2;
