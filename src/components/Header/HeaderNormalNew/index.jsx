import React from "react";
import "./styles.css";

import { useResponsive } from "../../../context/ResponsiveProvider";
import { useHomeDataContext } from "../../../context/HomeDataContext";

function HeaderNormalNew() {
  const { isMobile } = useResponsive();
  const { homeData } = useHomeDataContext();

  return (
    <>
      {isMobile && (
        <svg width="0" height="0" id="baseCurve">
          <defs>
            <clipPath id="bannerCurve" clipPathUnits="objectBoundingBox">
              <path d="M 0,1 L 0,0 L 1,0 L 1,1 C .65 .8, .35 .8, 0 1 Z"></path>
            </clipPath>
          </defs>
        </svg>
      )}
      {!isMobile && (
        <svg width="0" height="0" id="baseCurveLarge">
          <defs>
            <clipPath id="bannerCurveLarge" clipPathUnits="objectBoundingBox">
              <path d="M 0,1 L 5,0 L 0,0 Z"></path>
            </clipPath>
          </defs>
        </svg>
      )}
      <div className="cover-photo-wrapper">
        <div className="cover-photo-blurred-wrapper">
          <img
            alt="Cover blurred"
            src={homeData?.bannerUrl}
            className="cover-photo-blurred"
            width="100%"
          />
        </div>
        <div className="cover-photo centered-content">
          <img alt="Cover" src={homeData?.bannerUrl} className="cover-photo" />
        </div>
      </div>
      {/* <h1 className="test">Teste</h1> */}
    </>
  );
}

export default HeaderNormalNew;
