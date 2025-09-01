import type { ComponentPropsWithoutRef } from 'react';

interface ChatAttachmentIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
  color?: string;
}

export function ChatAttachmentIcon({ className }: ChatAttachmentIconProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="27" height="27" rx="4.25" stroke="#03010C" />
      <path
        d="M20 14.7715H14.8571V19.4001H13.1429V14.7715H8V13.2287H13.1429V8.6001H14.8571V13.2287H20V14.7715Z"
        fill="#03010C"
      />
    </svg>
  );
}
