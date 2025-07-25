import type { ComponentPropsWithoutRef } from 'react';

interface NoIconProps extends ComponentPropsWithoutRef<'svg'> {
  className?: string;
}

export function NoIcon({ className }: NoIconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="20" fill="#FF383C" />
      <path
        d="M13.1441 28L18.4801 19.881L13.3051 11.739H16.2721L20.0211 17.949L23.7701 11.739H26.6681L21.5161 19.812L26.8521 28H23.9081L19.9751 21.767L15.9731 28H13.1441Z"
        fill="white"
      />
    </svg>
  );
}
