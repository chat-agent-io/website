import type { ComponentPropsWithoutRef } from 'react';

interface CheckIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
  color?: string;
}

export function CheckIcon({ className, color = '#4E4D54' }: CheckIconProps) {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.70459 11.1856L2.36388 6.744L0.5 8.6512L6.70459 15L19.5 1.9072L17.6361 0L6.70459 11.1856Z"
        fill={color}
      />
    </svg>
  );
}
