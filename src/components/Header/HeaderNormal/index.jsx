import React from "react";

import "./styles.css";
import SocialMedia from "../../SocialMedia";
import { useHomeDataContext } from "../../../context/HomeDataContext";

function HeaderNormal() {
  const { homeData } = useHomeDataContext();

  return (
    <header className="header-normal" id="main-header">
      <div className="backdrop-container">
        <img src={homeData?.bannerUrl} alt="" className="backdrop-image" />
      </div>

      <div className="intro">
        <img src={homeData?.avatarUrl} alt="" className="avatar" />
        <div className="title-wrapper">
          <div className="title">
            <h1>{homeData?.name}</h1>
            <SocialMedia />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderNormal;
