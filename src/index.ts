import { useEffect, useRef, useState } from 'react';

import { BeforeInstallPromptEvent, Options, ReturnType } from './types';

const useBeforeInstallPrompt = (options?: Options): ReturnType => {
  const {
    acceptedFn = () => console.log('User accepted the A2HS prompt'),
    dismissedFn = () => console.log('User dismissed the A2HS prompt'),
    installedFn = () => console.log('Already installed'),
  } = { ...options };
  const [isInstalled, setIsInstalled] = useState(false);
  let beforeInstallPromptEvent = useRef<BeforeInstallPromptEvent>();

  const addToHomeScreen = async () => {
    if (!beforeInstallPromptEvent.current) return false;

    beforeInstallPromptEvent.current.prompt();

    const { outcome } = await beforeInstallPromptEvent.current.userChoice;

    if (outcome === 'accepted') {
      acceptedFn?.();
    } else {
      dismissedFn?.();
    }
  };

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      beforeInstallPromptEvent.current = e;
    };

    window.addEventListener('beforeinstallprompt', handler);

    if (!beforeInstallPromptEvent.current) {
      setIsInstalled(true);
      installedFn?.();
    } else {
      setIsInstalled(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, [installedFn]);

  return { isInstalled, addToHomeScreen };
};

export default useBeforeInstallPrompt;
