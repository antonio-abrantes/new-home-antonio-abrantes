import React from "react";

// import "./styles.css";
import HeaderNormalNew from "./HeaderNormalNew";
import HeaderSticky from "./HeaderSticky";
import { useScrollPosition } from "../../context/hooks/useScrollPosition";
function Header() {
  const scrollThreshold = 300;
  const hasScrolled = useScrollPosition(scrollThreshold);

  return (
    <>
      {hasScrolled && <HeaderSticky scrollThreshold={scrollThreshold} />}
      <HeaderNormalNew />
    </>
  );
}

export default Header;
