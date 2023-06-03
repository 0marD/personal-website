import { useEffect, useState } from "react";

const useStackPreview = () => {
  const [stackSlice, setStackSlice] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setStackSlice(4);
      } else if (screenWidth < 1024) {
        setStackSlice(5);
      } else if (screenWidth < 1440) {
        setStackSlice(7);
      } else {
        setStackSlice(10);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    stackSlice,
  };
};

const useProjectPreview = () => {
  const [projectSlice, setProjectSlice] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setProjectSlice(1);
      } else if (screenWidth < 1024) {
        setProjectSlice(2);
      } else if (screenWidth < 1440) {
        setProjectSlice(3);
      } else {
        setProjectSlice(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    projectSlice,
  };
};

export { useStackPreview, useProjectPreview };
