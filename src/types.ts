import { MutableRefObject } from 'react';

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export interface Options {
  acceptedFn?: () => void;
  dismissedFn?: () => void;
  afterInstallPromptFn?: () => void;
}

export interface ReturnType {
  deferredPrompt?: MutableRefObject<BeforeInstallPromptEvent | undefined>;
  addToHomeScreen?: () => Promise<false | void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}
