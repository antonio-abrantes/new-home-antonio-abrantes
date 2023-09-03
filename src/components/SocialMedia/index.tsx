import React from "react";
import {
  TiSocialTwitter,
  TiSocialGithub,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialFacebook,
} from "react-icons/ti";
import "./styles.css";

import { useHomeDataContext } from "../../context/HomeDataContext";

function SocialMedia() {
  const { homeData } = useHomeDataContext();

  return (
    <div className="social-media-container">
      <a
        href={homeData?.socialMedia?.github}
        rel="noreferrer noopener"
        target="_blank"
      >
        <TiSocialGithub />
      </a>
      <a
        href={homeData?.socialMedia?.linkedin}
        rel="noreferrer noopener"
        target="_blank"
      >
        <TiSocialLinkedin />
      </a>
      <a
        href={homeData?.socialMedia?.twitter}
        rel="noreferrer noopener"
        target="_blank"
      >
        <TiSocialTwitter />
      </a>
      <a
        href={homeData?.socialMedia?.facebook}
        rel="noreferrer noopener"
        target="_blank"
      >
        <TiSocialFacebook />
      </a>
      <a
        href={homeData?.socialMedia?.instagram}
        rel="noreferrer noopener"
        target="_blank"
      >
        <TiSocialInstagram />
      </a>
    </div>
  );
}

export default SocialMedia;
