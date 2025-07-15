import type { ComponentPropsWithoutRef } from 'react';

interface UpArrowIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number;
  className?: string;
}

export function UpArrowIcon({}: UpArrowIconProps) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 6.15117L7 2.84124e-07L13.5 6.15117L11.5466 8L7 3.69593L2.45341 8L0.5 6.15117Z"
        fill="#4E4D54"
      />
    </svg>
  );
}
