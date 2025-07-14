import type { ComponentPropsWithoutRef } from 'react';

interface ChatAttachmentIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
  color?: string;
}

export function ChatAttachmentIcon({ className }: ChatAttachmentIconProps) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="1" y="1" width="19" height="19" rx="9.5" stroke="#818085" />
      <path
        d="M15.5 11.1429H11.2143V15H9.78571V11.1429H5.5V9.85714H9.78571V6H11.2143V9.85714H15.5V11.1429Z"
        fill="#818085"
      />
    </svg>
  );
}
