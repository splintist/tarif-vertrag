import React, { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export function AdUnit({ slot, format = 'auto', style }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (adRef.current && window.adsbygoogle) {
        const adElement = document.createElement('ins');
        adElement.className = 'adsbygoogle';
        adElement.style.display = 'block';
        adElement.setAttribute('data-ad-client', 'ca-pub-5847114744956507');
        adElement.setAttribute('data-ad-slot', slot);
        adElement.setAttribute('data-ad-format', format);
        adElement.setAttribute('data-full-width-responsive', 'true');

        adRef.current.appendChild(adElement);
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('Error loading Google AdSense:', error);
    }

    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
    };
  }, [slot, format]);

  return (
    <div ref={adRef} className="ad-unit my-8" style={style} />
  );
}