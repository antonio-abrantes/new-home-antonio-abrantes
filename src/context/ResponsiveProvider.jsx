import React, { useState, useEffect, useContext, createContext } from "react";

const ResponsiveContext = createContext();

export const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error("useResponsive must be used within a ResponsiveProvider");
  }
  return context;
};

export const ResponsiveProvider = ({ mobileBreakpoint, children }) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= mobileBreakpoint
  );

  const handleResize = () => {
    setIsMobile(window.innerWidth <= mobileBreakpoint);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ResponsiveContext.Provider value={{ isMobile }}>
      {children}
    </ResponsiveContext.Provider>
  );
};
