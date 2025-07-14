import type { ComponentPropsWithoutRef } from 'react';

interface LinkedInIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number;
  className?: string;
}

export function LinkedInIcon({}: LinkedInIconProps) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.90374 4.82457C4.23129 4.82457 5.30749 3.74838 5.30749 2.42083C5.30749 1.09328 4.23129 0.0170898 2.90374 0.0170898C1.57619 0.0170898 0.5 1.09328 0.5 2.42083C0.5 3.74838 1.57619 4.82457 2.90374 4.82457Z"
        fill="#4E4D54"
      />
      <path
        d="M7.5777 6.64599V19.9819H11.7183V13.387C11.7183 11.6468 12.0457 9.96157 14.2034 9.96157C16.3314 9.96157 16.3577 11.9511 16.3577 13.4969V19.983H20.5006V12.6696C20.5006 9.07719 19.7271 6.31641 15.5283 6.31641C13.5123 6.31641 12.1611 7.4227 11.6085 8.46966H11.5524V6.64599H7.5777ZM0.830078 6.64599H4.9773V19.9819H0.830078V6.64599Z"
        fill="#4E4D54"
      />
    </svg>
  );
}
