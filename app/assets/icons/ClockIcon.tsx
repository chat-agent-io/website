import type { ComponentPropsWithoutRef } from 'react';

interface ClockIconProps extends ComponentPropsWithoutRef<'svg'> {
  className?: string;
  color?: string;
}

export function ClockIcon({ className, color = '#3214F0' }: ClockIconProps) {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 40.5C8.97167 40.5 0 31.5283 0 20.5C0 9.47167 8.97167 0.5 20 0.5C31.0283 0.5 40 9.47167 40 20.5C40 31.5283 31.0283 40.5 20 40.5ZM20 2.16667C9.89167 2.16667 1.66667 10.3917 1.66667 20.5C1.66667 30.6083 9.89167 38.8333 20 38.8333C30.1083 38.8333 38.3333 30.6083 38.3333 20.5C38.3333 10.3917 30.1083 2.16667 20 2.16667ZM24.6667 28.6667C25.035 28.39 25.11 27.8683 24.835 27.5L20.0017 21.055V9.66667C20.0017 9.20667 19.6283 8.83333 19.1683 8.83333C18.7083 8.83333 18.335 9.20667 18.335 9.66667V21.3333C18.335 21.5133 18.3933 21.6883 18.5017 21.8333L23.5017 28.5C23.6667 28.7183 23.9167 28.8333 24.1683 28.8333C24.3417 28.8333 24.5167 28.7783 24.6667 28.6667Z"
        fill={color}
      />
    </svg>
  );
}
