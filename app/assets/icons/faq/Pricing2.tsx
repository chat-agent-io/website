import * as React from "react";
import type { SVGProps } from "react";
const SvgPricing2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#pricing2_svg__a)">
      <path
        fill="#03010C"
        d="M10 20C4.486 20 0 15.514 0 10S4.486 0 10 0s10 4.486 10 10-4.486 10-10 10m0-18.333c-4.595 0-8.333 3.738-8.333 8.333S5.405 18.333 10 18.333s8.333-3.738 8.333-8.333S14.595 1.667 10 1.667m4.722 11.455a.833.833 0 1 0-1.11-1.244c-.015.014-1.67 1.455-3.612 1.455s-3.597-1.441-3.613-1.456a.834.834 0 0 0-1.109 1.244c.086.076 2.133 1.878 4.722 1.878s4.636-1.802 4.722-1.878m-.555-5.205a1.25 1.25 0 1 0-2.501 0 1.25 1.25 0 0 0 2.5 0m-5.834 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0"
      />
    </g>
    <defs>
      <clipPath id="pricing2_svg__a">
        <path fill="#fff" d="M0 20h20V0H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPricing2;
