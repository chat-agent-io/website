'use client';

import React from 'react';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { MobileFooter } from '../MobileFooter/MobileFooter';
import { DesktopFooter } from '../DesktopFooter/DesktopFooter';

export const Footer = (): React.ReactElement => {
  const isMobile = useMediaQuery('1023');

  return isMobile ? <MobileFooter /> : <DesktopFooter />;
};
