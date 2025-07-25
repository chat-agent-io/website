import type { ComponentPropsWithoutRef } from 'react';

interface YesIconProps extends ComponentPropsWithoutRef<'svg'> {
  className?: string;
}

export function YesIcon({ className }: YesIconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="20" fill="#14AD14" />
      <path
        d="M16.656 28.092L9.18102 19.444L10.929 17.788L16.656 24.343L29.03 8.979L30.824 10.612L16.656 28.092Z"
        fill="white"
      />
    </svg>
  );
}
