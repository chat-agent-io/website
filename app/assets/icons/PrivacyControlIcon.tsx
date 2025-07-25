import type { ComponentPropsWithoutRef } from 'react';

interface PrivacyControlIconProps extends ComponentPropsWithoutRef<'svg'> {
  className?: string;
}

export function PrivacyControlIcon({ className }: PrivacyControlIconProps) {
  return (
    <svg
      width="40"
      height="28"
      viewBox="0 0 40 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26.6667 0.666504H13.3333C5.98167 0.666504 0 6.64817 0 13.9998C0 21.3515 5.98167 27.3332 13.3333 27.3332H26.6667C34.0183 27.3332 40 21.3515 40 13.9998C40 6.64817 34.0183 0.666504 26.6667 0.666504ZM26.6667 25.6665H13.3333C6.9 25.6665 1.66667 20.4315 1.66667 13.9998C1.66667 7.56817 6.9 2.33317 13.3333 2.33317H26.6667C33.1 2.33317 38.3333 7.56817 38.3333 13.9998C38.3333 20.4315 33.1 25.6665 26.6667 25.6665ZM33.3333 13.9998C33.3333 17.6765 30.3433 20.6665 26.6667 20.6665C22.99 20.6665 20 17.6765 20 13.9998C20 10.3232 22.99 7.33317 26.6667 7.33317C30.3433 7.33317 33.3333 10.3232 33.3333 13.9998Z"
        fill="#03010C"
      />
    </svg>
  );
}
