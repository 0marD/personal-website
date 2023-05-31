import { useEffect, useState } from "react";

export const useStackPreview = () => {
  const [slice, setSlice] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1023) {
        setSlice(7);
      } else {
        setSlice(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    slice,
  };
};
