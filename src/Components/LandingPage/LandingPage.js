import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./LandingPageElements";
function LandingPage() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Bæredygtig mad</HeroH1>
          <HeroP>Leveret lige til døren</HeroP>
          <HeroBtn>Menu</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default LandingPage;
