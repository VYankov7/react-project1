import React, { useState, useEffect } from 'react';

function BackToTopButton() {
  const [backToTopButton, setbackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setbackToTopButton(true);
      } else {
        setbackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          height: "50px",
          width: "50px",
          fontSize: "50px",
        }}
          onClick={scrollUp}>^</button>
      )}
    </div>
  );
}

export default BackToTopButton;
