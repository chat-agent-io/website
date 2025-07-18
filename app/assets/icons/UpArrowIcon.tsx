import type { ComponentPropsWithoutRef } from 'react';

interface UpArrowIconProps extends ComponentPropsWithoutRef<'svg'> {
  className?: string;
}

export function UpArrowIcon({ className }: UpArrowIconProps) {
  return (
    <svg
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M-8.08151e-08 6.65117L6.5 0.5L13 6.65117L11.0466 8.5L6.5 4.19593L1.95341 8.5L-8.08151e-08 6.65117Z"
        fill="#4E4D54"
      />
    </svg>
  );
}
