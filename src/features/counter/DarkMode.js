import React, { useState, useEffect } from 'react';

function StickyBar() {
  const [isClosed, setIsClosed] = useState(localStorage.getItem('isClosed') === 'true');

  useEffect(() => {
    localStorage.setItem('isClosed', isClosed.toString());
  }, [isClosed]);


  const closeBar = () => {
    setIsClosed(true);
  };

  const redirectToGooglePlay = () => {
    window.location.href = 'https://play.google.com/';
  };

  const redirectToAppleAppStore = () => {
    window.location.href = 'https://www.apple.com/id/app-store/';
  };

  if (isClosed) {
    return null;
  }

  return (
    <div className="sticky-bar">
      <div>Download Aplikasi Kami</div>
      <button onClick={redirectToGooglePlay}>Google Play Store</button>
      <button onClick={redirectToAppleAppStore}>Apple App Store</button>
      <button id="close-btn" onClick={closeBar}>Close</button>
    </div>
  );
}

export default StickyBar;
