import React from "react";

import "./styles.css";

import { useHomeDataContext } from "../../context/HomeDataContext";
import SocialMedia from "../SocialMedia";

function Main() {
  const { homeData } = useHomeDataContext();

  return (
    <main id="main">
      <div className="main-content">
        <div className="profile-wrapper">
          <div className="picture-wrapper">
            <div className="picture">
              <img
                alt="Profile"
                src={homeData?.avatarUrl}
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="name-bio-wrapper">
            <div className="name">
              <h1 className="title">{homeData?.name}</h1>
            </div>
            {/* Redes sociais */}
            <div className="socials">
              <SocialMedia />
            </div>
            <div className="bio">
              <div className="content">{homeData?.about}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
