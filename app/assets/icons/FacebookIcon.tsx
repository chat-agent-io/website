import type { ComponentPropsWithoutRef } from 'react';

interface FacebookIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number;
  className?: string;
}

export function FacebookIcon({}: FacebookIconProps) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 0C4.97745 0 0.5 4.50448 0.5 10.0604C0.5 15.081 4.15637 19.2424 8.93784 20V12.9691H6.39759V10.0604H8.93784V7.84385C8.93784 5.32046 10.431 3.92897 12.7142 3.92897C13.8083 3.92897 14.9544 4.12516 14.9544 4.12516V6.59926H13.6903C12.4502 6.59926 12.0622 7.37599 12.0622 8.17185V10.0584H14.8334L14.3904 12.9671H12.0622V19.998C16.8436 19.2444 20.5 15.082 20.5 10.0604C20.5 4.50448 16.0226 0 10.5 0Z"
        fill="#4E4D54"
      />
    </svg>
  );
}
