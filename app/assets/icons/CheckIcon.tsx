import type { ComponentPropsWithoutRef } from 'react';

interface CheckIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number;
  className?: string;
}

export function CheckIcon({ className }: CheckIconProps) {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.2 0.800003L5.6 10.4L0.800003 5.6L2.2 4.2L5.6 7.6L13.8 -0.6L15.2 0.800003Z"
        fill="currentColor"
      />
    </svg>
  );
}
