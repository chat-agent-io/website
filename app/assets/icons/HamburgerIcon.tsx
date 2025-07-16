import type { ComponentPropsWithoutRef } from 'react';

interface HamburgerIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
  color?: string;
}

export function HamburgerIcon({ className }: HamburgerIconProps) {
  return (
    <svg
      width="27"
      height="21"
      viewBox="0 0 27 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 0.5H27V3.83333H0V0.5ZM0 8.83333H27V12.1667H0V8.83333ZM0 17.1667H27V20.5H0V17.1667Z"
        fill="#03010C"
      />
    </svg>
  );
}
