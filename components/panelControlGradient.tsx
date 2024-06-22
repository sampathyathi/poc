import { useEffect } from 'react';
export function panelControlGradient() {
  useEffect(() => {
    // Load your JavaScript script here
    const script = document.createElement('script');
    script.src = '../main.js';
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array to run the effect only once

  // Component rendering and logic here
}