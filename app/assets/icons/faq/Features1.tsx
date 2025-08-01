import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFeatures1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#features1_svg__a)">
      <path
        fill="#03010C"
        d="M12.536 0H7.461a4.17 4.17 0 0 0-4.129 4.166v11.667a4.17 4.17 0 0 0 4.167 4.166h5a4.17 4.17 0 0 0 4.166-4.166V4.167A4.17 4.17 0 0 0 12.536 0M15 15.833c0 1.378-1.122 2.5-2.5 2.5h-5a2.503 2.503 0 0 1-2.5-2.5V4.167c0-1.211.865-2.223 2.009-2.452l.578 1.158c.141.282.43.46.746.46h3.333a.83.83 0 0 0 .746-.46l.579-1.158a2.504 2.504 0 0 1 2.009 2.452zm-4.167.833H9.165a.834.834 0 0 1 0-1.667h1.667a.834.834 0 0 1 0 1.667"
      />
    </g>
    <defs>
      <clipPath id="features1_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFeatures1;
