import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../utils/useWindowSize";

function Orb(props) {
  const { width, height } = useWindowSize();

  const moveOrb = keyframes`
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(${width}px, ${height}px);
        }
        100% {
            transform: translate(0, 0);
        }
    `;

  const OrbStyled = styled.div`
    width: 100vh;
    height: 95vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -45vh;
    margin-top: -47.5vh;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    filter: blur(200px);
    animation: ${moveOrb} 15s alternate linear infinite;
  `;

  return <OrbStyled />;
}

export default Orb;
