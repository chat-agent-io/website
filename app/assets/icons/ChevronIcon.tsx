import type { ComponentPropsWithoutRef } from 'react';

interface ChevronIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
  color?: string;
}

export function ChevronIcon({ className }: ChevronIconProps) {
  return (
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.84883 13L8 6.5L1.84883 0L0 1.95341L4.30407 6.5L0 11.0466L1.84883 13Z"
        fill="#818085"
      />
    </svg>
  );
}
