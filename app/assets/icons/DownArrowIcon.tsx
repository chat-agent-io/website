import type { ComponentPropsWithoutRef } from 'react';

interface DownArrowIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number;
  className?: string;
}

export function DownArrowIcon({}: DownArrowIconProps) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 1.84883L7 8L0.5 1.84883L2.45341 0L7 4.30407L11.5466 0L13.5 1.84883Z"
        fill="#4E4D54"
      />
    </svg>
  );
}
