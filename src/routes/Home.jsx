import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <NavBar />
      <Padding />
      <Main>
        <Slider />
      </Main>
    </div>
  );
}

export default Home;

const Padding = styled.div`
  height: 50px;
  @media screen and (min-width: 768px) and (max-width: 991px) {
    height: 110px;
  }
  @media screen and (max-width: 767px) {
    height: 110px;
  }
`;

const Main = styled.div`
  background-color: #fff;
  @media screen and (min-width: 1200px) {
    padding-top: 25px;
  }
`;
