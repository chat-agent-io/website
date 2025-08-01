import * as React from "react";
import type { SVGProps } from "react";
const SvgSetup3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g fill="#03010C" clipPath="url(#setup3_svg__a)">
      <path d="M10.001 1.667a8.36 8.36 0 0 1 5.935 2.5h-2.602a.833.833 0 1 0 0 1.667h3.453a1.55 1.55 0 0 0 1.547-1.548V.834a.833.833 0 1 0-1.666 0v1.731A9.985 9.985 0 0 0 .043 9.084a.84.84 0 0 0 1.387.71.82.82 0 0 0 .27-.525 8.345 8.345 0 0 1 8.301-7.602M19.127 10a.82.82 0 0 0-.824.732 8.322 8.322 0 0 1-14.237 5.101h2.602a.833.833 0 1 0 0-1.666H3.215a1.547 1.547 0 0 0-1.547 1.547v3.453a.833.833 0 0 0 1.667 0v-1.732a9.984 9.984 0 0 0 16.625-6.518.84.84 0 0 0-.833-.917" />
    </g>
    <defs>
      <clipPath id="setup3_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSetup3;
