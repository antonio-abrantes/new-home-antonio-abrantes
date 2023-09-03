import React from "react";

import "./styles.css";
import { useScrollPosition } from "../../../context/hooks/useScrollPosition";
import SocialMedia from "../../SocialMedia";

import { useHomeDataContext } from "../../../context/HomeDataContext";

function HeaderSticky({ scrollThreshold }) {
  const hasScrolled = useScrollPosition(scrollThreshold);
  const { homeData } = useHomeDataContext();

  return (
    <header
      className={`header-sticky ${hasScrolled ? "header-fadeout-sticky" : ""}`}
    >
      <div className="backdrop-container-sticky">
        <img
          src={homeData?.bannerUrl}
          alt=""
          className="backdrop-image-sticky"
        />
        <div className="header__cover-sticky" />
      </div>

      <div className="intro-sticky">
        <img src={homeData?.avatarUrl} alt="" className="avatar-sticky" />
        <div className="title-wrapper-sticky">
          <div className="title-sticky">
            <h1>{homeData?.name}</h1>
            <SocialMedia />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderSticky;
