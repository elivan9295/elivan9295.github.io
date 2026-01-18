import { useEffect, useRef, useState } from "react";

const RSVPButton = ({ link, text = "RSVP" }) => {
  const buttonRef = useRef(null);
  const [hasWiggled, setHasWiggled] = useState(false);

  useEffect(() => {
    if (!buttonRef.current || hasWiggled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasWiggled(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.5 } // trigger when 50% of button is visible
    );

    observer.observe(buttonRef.current);

    return () => observer.disconnect();
  }, [hasWiggled]);

  return (
    <a
      ref={buttonRef}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative
        inline-block
        bg-green/80
        text-ivory
        font-semibold
        text-lg md:text-2xl
        py-5 md:py-6 px-10 md:px-12
        rounded-full
        shadow-lg
        transition-all duration-300
        hover:bg-green/100 hover:scale-[1.03] active:scale-95
        text-center
        ${hasWiggled ? "wiggle" : ""}
      `}
    >
      {text}

      {/* Inline keyframes for wiggle */}
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          15% { transform: rotate(3deg); }
          30% { transform: rotate(-3deg); }
          45% { transform: rotate(2deg); }
          60% { transform: rotate(-2deg); }
          75% { transform: rotate(1deg); }
        }

        .wiggle {
          animation: wiggle 1s ease-in-out 3;
        }
      `}</style>
    </a>
  );
};

export default RSVPButton;
