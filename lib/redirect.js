import { useEffect } from 'react';
import { useRouter } from 'next/router';
import languageDetector from './languageDetector';

export const useRedirect = (go) => {
  const router = useRouter();
  const to = go || router.asPath;

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (to.startsWith('/' + detectedLng) && router.route === '/404') { // prevent endless loop
      router.replace('/' + detectedLng + router.route);
      return;
    }

    languageDetector.cache(detectedLng);
    router.replace('/' + detectedLng + to);
  });

  return null;
};

export const Redirect = () => {
  useRedirect();
  return null;
};

// eslint-disable-next-line react/display-name
export const getRedirect = (to) => () => {
  useRedirect(to);
  return null;
};
