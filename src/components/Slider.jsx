import React, { useState } from "react";
import styled from "styled-components";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
  Banner7,
  Banner8,
  Banner9,
} from "../Image";
import { Link } from "react-router-dom";

function Slider() {
  const [toMove, setToMove] = useState(63);
  const slideRight = () => {
    setToMove(toMove + 75.27);
  };
  const slideLeft = () => {
    setToMove(toMove - 75.27);
  };
  return (
    <SlickTrack>
      <NextArrow className="arrow" onClick={slideRight}>
        <BsChevronCompactRight />
      </NextArrow>
      <PrevArrow className="arrow" onClick={slideLeft}>
        <BsChevronCompactLeft />
      </PrevArrow>
      <SlickLong move={toMove}>
        <SlickSlide>
          <div className="imgBox">
            <img src={Banner1} alt="bannerImage" />
          </div>
          <Information>
            <h2>성장하는 개발자가 되려면?</h2>
            <h3>OOO 검색하지 말 것!</h3>
            <hr></hr>
            <Link to={"/"}>
              <span>
                바로가기
                <BsChevronCompactRight />
              </span>
            </Link>
          </Information>
        </SlickSlide>
        <SlickSlide>
          <div className="imgBox">
            <img src={Banner2} alt="bannerImage" />
          </div>
          <Information>
            <h2>성과를 내는 마케팅</h2>
            <h3>실제 사례를 공개합니다!</h3>
            <hr></hr>
            <Link to={"/"}>
              <span>
                바로가기
                <BsChevronCompactRight />
              </span>
            </Link>
          </Information>
        </SlickSlide>
        <SlickSlide>
          <div className="imgBox">
            <img src={Banner3} alt="bannerImage" />
          </div>
          <Information>
            <h2>개발자 성장 비결 공개!</h2>
            <h3>Velog, 글 쓰는 개발자들의 이야기</h3>
            <hr></hr>
            <Link to={"/"}>
              <span>
                바로가기
                <BsChevronCompactRight />
              </span>
            </Link>
          </Information>
        </SlickSlide>
        <SlickSlide>
          <div className="imgBox">
            <img src={Banner4} alt="bannerImage" />
          </div>
          <Information>
            <h2>UX 디자이너의 커리어 설계</h2>
            <h3>브랜드 가치를 더하는 디자인</h3>
            <hr></hr>
            <Link to={"/"}>
              <span>
                바로가기
                <BsChevronCompactRight />
              </span>
            </Link>
          </Information>
        </SlickSlide>
        <SlickSlide>
          <div className="imgBox">
            <img src={Banner5} alt="bannerImage" />
          </div>
          <Information>
            <h2>포트폴리오를 부탁해!</h2>
            <h3>디자이너의 포폴 살펴보기</h3>
            <hr></hr>
            <Link to={"/"}>
              <span>
                바로가기
                <BsChevronCompactRight />
              </span>
            </Link>
          </Information>
        </SlickSlide>
        <SlickSlide>
          <div className="imgBox">
            <img src={Banner6} alt="bannerImage" />
          </div>
          <Information>
            <h2>개발자 되고싶은 분들!?</h2>
            <h3>프론트엔드 무료 교육과정 참여하기</h3>
            <hr></hr>
            <Link to={"/"}>
              <span>
                바로가기
                <BsChevronCompactRight />
              </span>
            </Link>
          </Information>
        </SlickSlide>
        <SlickSlide>
          <div className="imgBox">
            <img src={Banner7} alt="bannerImage" />
          </div>
          <Information>
            <h2>마케팅 주니어를 찾습니다</h2>
            <h3>기업 과제 풀고 취업까지 한번에!</h3>
            <hr></hr>
            <Link to={"/"}>
              <span>
                바로가기
                <BsChevronCompactRight />
              </span>
            </Link>
          </Information>
        </SlickSlide>
        <SlickSlide>
          <div className="imgBox">
            <img src={Banner8} alt="bannerImage" />
          </div>
          <Information>
            <h2>2022년 달라지는 노동법령</h2>
            <h3>노무관리 쟁점 한 눈에 파악하기</h3>
            <hr></hr>
            <Link to={"/"}>
              <span>
                바로가기
                <BsChevronCompactRight />
              </span>
            </Link>
          </Information>
        </SlickSlide>
        <SlickSlide>
          <div className="imgBox">
            <img src={Banner9} alt="bannerImage" />
          </div>
          <Information>
            <h2>해, 커리어 EP 02 공개</h2>
            <h3>마지막 관문 2라운드의 승자는?</h3>
            <hr></hr>
            <Link to={"/"}>
              <span>
                바로가기
                <BsChevronCompactRight />
              </span>
            </Link>
          </Information>
        </SlickSlide>
      </SlickLong>
    </SlickTrack>
  );
}

export default Slider;

const SlickTrack = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 100vw;
  overflow: hidden;
  & button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 120px;
    width: 30px;
    height: 60px;
    background-color: #ffffff;
    border-radius: 15px;
    opacity: 0.5;
    font-size: 16px;
    z-index: 2;
  }
  & > .arrow {
    display: none;
  }
  @media screen and (min-width: 1200px) {
    & > .arrow {
      display: block;
    }
  }
`;
const SlickLong = styled.div`
  display: flex;
  width: 100%;
  transform: translateX(-${(props) => props.move}vw);
  transition: transform 0.3s ease-in-out;
`;
const SlickSlide = styled.div`
  position: relative;
  margin: 20px 10px;
  width: 100%;
  height: 100%;
  & > .imgBox {
    width: 100%;
    & > img {
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
    }
  }
  @media screen and (min-width: 1200px) {
    margin: 0;
    padding: 0 12px;
    box-sizing: content-box;
  }
  @media screen and (max-width: 1199px) {
    & > .imgBox {
      height: 183px;
      border-radius: 3px 3px 0 0;
      & > img {
        height: inherit;
      }
    }
  }
`;
const NextArrow = styled.button`
  right: calc((100% - 1200px) / 2);
`;
const PrevArrow = styled.button`
  left: calc((100% - 1210px) / 2);
`;

const Information = styled.div`
  text-align: center;

  & > h2 {
    margin-top: 20px;
    font-size: 18px;
    line-height: 1;
    font-weight: 700;
    color: #333;
    width: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  & > h3 {
    margin-top: 6px;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.15;
    color: #666;
    width: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  & > hr {
    display: none;
    height: 1px;
    margin: 0;
    border: none;
    flex-shrink: 0;
    background-color: #ececec;
  }
  & > a {
    font-size: 14px;
    font-weight: 700;
    color: #36f;
    height: 40px;
    padding: 6px 8px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 64px;
    text-align: center;
    cursor: pointer;
    & > span > svg {
      transform: translateY(2px);
    }
  }
  @media screen and (min-width: 1200px) {
    position: absolute;
    bottom: 28px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    /* opacity: 0; */
    text-align: left;
    left: 34px;

    & > h2 {
      margin-left: 20px;
      margin-right: 20px;
      font-size: 20px;
      line-height: 1.5;
    }
    & > h3 {
      margin: 0 20px;
      height: 44px;
      font-size: 14px;
      line-height: 1.64;
      color: #333;
    }
    & > hr {
      display: block;
    }
    & > a {
      margin: 6px 0 0 13px;
    }
  }
`;
