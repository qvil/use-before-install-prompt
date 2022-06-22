import { useEffect, useRef } from 'react';

import { BeforeInstallPromptEvent, Options, ReturnType } from './types';

const useBeforeInstallPrompt = (options?: Options): ReturnType => {
  const {
    acceptedFn = () => console.log('User accepted the A2HS prompt'),
    dismissedFn = () => console.log('User dismissed the A2HS prompt'),
    afterInstallPromptFn = () => console.log('Not deferred prompt'),
  } = { ...options };
  let deferredPrompt = useRef<BeforeInstallPromptEvent>();

  const addToHomeScreen = async () => {
    if (!deferredPrompt.current) return false;

    deferredPrompt.current.prompt();

    const { outcome } = await deferredPrompt.current.userChoice;

    if (outcome === 'accepted') {
      acceptedFn?.();
    } else {
      dismissedFn?.();
    }
  };

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      deferredPrompt.current = e;
    };

    window.addEventListener('beforeinstallprompt', handler);

    if (!deferredPrompt.current) {
      afterInstallPromptFn?.();
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, [afterInstallPromptFn]);

  return { deferredPrompt, addToHomeScreen };
};

export default useBeforeInstallPrompt;
