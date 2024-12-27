import React, { useState, useEffect } from "react";
export function useIntersectionObserver(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.map((entry) => {
            if (entry.isIntersecting) {
              setIsIntersecting(true);
            }
          });
        },
        {
          threshold: 0.3,
        }
      );
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
        setIsIntersecting(false);
      };
    }
  }, []);
  return isIntersecting;
}
