'use client';

import { FullscreenProvider } from '@/lib/fullscreen-context';
import { ReactNode } from 'react';

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  return <FullscreenProvider>{children}</FullscreenProvider>;
}
