import React from "react";
import styled from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";
import { profileAvatar, wantedLogo } from "../Image";
import { Link } from "react-router-dom";
import { VscBell } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMoreHoriz } from "react-icons/md";

function NavBar() {
  return (
    <Header>
      <MainBar>
        <Logo>
          <HiOutlineMenu />
          <img src={wantedLogo} alt="wantedLogo" />
        </Logo>
        <Menu>
          <li className="HomeBtn">
            <Link to={"/"}>홈</Link>
          </li>
          <li>
            <Link to={"/"}>채용</Link>
          </li>
          <li>
            <Link to={"/"}>이벤트</Link>
          </li>
          <li className="smMoreVisible">
            <Link to={"/"}>직군별 연봉</Link>
          </li>
          <li className="smMoreVisible">
            <Link to={"/"}>이력서</Link>
          </li>
          <li className="smMoreVisible">
            <Link className="comunity" to={"/"}>
              커뮤니티
            </Link>
          </li>
          <li className="smMoreVisible">
            <Link to={"/"}>프리랜서</Link>
          </li>
          <li className="smMoreVisible">
            <Link className="AiPredict" to={"/"}>
              AI 합격예측
            </Link>
          </li>
        </Menu>
        <Aside>
          <ul>
            <li>
              <button className="searchBtn">
                <AiOutlineSearch />
              </button>
            </li>
            <li className="notiBox">
              <button className="notiBtn">
                <VscBell />
              </button>
            </li>
            <li className="profileBox mdMoreVisible">
              <button>
                <div>
                  <div></div>
                </div>
              </button>
            </li>
            <li className="leftDivision mdMoreVisible">
              <Link to={"/"}>기업 서비스</Link>
            </li>
            <li className="visibleMenu">
              <button>
                <MdOutlineMoreHoriz />
              </button>
            </li>
          </ul>
        </Aside>
      </MainBar>
    </Header>
  );
}

const Header = styled.div`
  position: fixed;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 100;
`;

const MainBar = styled.div`
  display: flex;
  max-width: 1060px;
  margin: 0 auto;
  position: relative;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 1200px) {
    margin: 0 auto;
    height: 50px;
    width: 87.72%;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 90%;
    margin: 0 auto;
    height: 50px;
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    height: 110px;
    width: 90%;
  }
  @media screen and (max-width: 767px) {
    height: 110px;
  }
`;

const Logo = styled.div`
  display: flex;
  & > svg {
    font-size: 1.4rem;
    margin-right: 1rem;
  }
  & > img {
    width: 74.38px;
    height: 17px;
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    padding: 15px 0;
    height: 60px;
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    height: 60px;
    width: 100%;
    padding: 15px 20px;
  }
`;

const Menu = styled.ul`
  display: flex;
  & > li {
    display: inline-block;
    & > a {
      position: relative;
      vertical-align: middle;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      padding: 15px;
      display: inline-block;
    }
    & > .comunity::after {
      content: "New";
      position: absolute;
      top: 10px;
      right: -5px;
      font-size: 0.3rem;
      font-weight: 400;
      color: #1b64f0;
    }
    & > .AiPredict::after {
      content: "Beta";
      position: absolute;
      top: 10px;
      right: -7px;
      font-size: 0.3rem;
      font-weight: 400;
      color: #1b64f0;
    }
  }
  & > .HomeBtn {
    display: none;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    justify-content: flex-start;
    margin-right: 30px;
    & > li {
      & > a {
        padding: 11px 10px 19px;
        font-size: 13px;
      }
      & > .comunity::after {
        top: 5px;
        right: -7px;
      }
      & > .AiPredict::after {
        right: -8px;
        top: 4px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    text-align: left;
    & > .smMoreVisible {
      display: none;
    }
    & > li > a {
      padding: 11px 10px 19px;
    }
    & > .HomeBtn {
      display: block;
    }
  }
`;

const Aside = styled.aside`
  padding: 9px 0;
  & > ul {
    height: 100%;
    margin: 0;
    & > li {
      position: relative;
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      & > * {
        height: 100%;
        padding: 0 5px;
        font-size: 14px;
        color: #333;
        font-weight: 600;
        line-height: 1;
      }
      & > button {
        & > svg {
          font-size: 1.3rem;
        }
      }
      & > .searchBtn {
        position: relative;
        margin-top: 5px;
      }
      & > .notiBtn {
        position: relative;
        margin-top: 5px;
        margin-right: 10px;
      }
    }
    & > .profileBox {
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      margin-right: 5px;
      & > button {
        position: relative;
        margin-right: 10px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        vertical-align: top;
        padding: 0;
        margin-right: 11px;
        & > div {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #e1e2e3;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          & > div {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background-position: 50%;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url(${profileAvatar});
          }
        }
      }
    }
    & .leftDivision {
      display: inline-flex;
      & > a {
        font-size: 13px;
        color: #666;
        line-height: 30px;
        height: 30px;
        border: 1px solid #e1e2e3;
        border-radius: 15px;
        padding: 0 10px;
        margin-left: 15px;
        font-weight: 400;
        display: inline-block;
        vertical-align: bottom;
      }
    }
    & > .leftDivision::before {
      display: block;
      content: "";
      width: 1px;
      height: 10px;
      background-color: #e1e2e3;
      margin: auto 10px;
    }
    & > .visibleMenu {
      & > button {
        margin-right: 10px;
        padding-left: 10px;
        & > svg {
          font-size: 1.4rem;
        }
      }
    }
    & > .notiBox > button::after {
      content: "N";
      position: absolute;
      top: -6px;
      left: 27px;
      width: 12px;
      height: 12px;
      display: inline-flex;
      background: #36f;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      color: white;
      font-size: 1px;
      font-weight: 300;
      text-align: center;
    }
    & > .profileBox > button::after {
      content: "N";
      position: absolute;
      top: -2px;
      left: 22px;
      width: 12px;
      height: 12px;
      display: inline-flex;
      background: #36f;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      color: white;
      font-size: 1px;
      font-weight: 300;
      text-align: center;
    }
  }
  @media screen and (min-width: 1200px) {
    & > ul {
      & > li {
        & > * {
          padding: 0 10px;
        }
      }
      & > .visibleMenu {
        display: none;
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    & > ul {
      & > .visibleMenu {
        display: none;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    & > ul {
      & > .mdMoreVisible {
        display: none;
      }
    }
  }
  @media screen and (max-width: 767px) {
    & > ul {
      margin-top: -5px;
      & > .mdMoreVisible {
        display: none;
      }
    }
  }
`;

export default NavBar;
