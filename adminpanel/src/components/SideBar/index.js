import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "./logo 1.svg";

const Main = styled.div`
  width: 10%;
  height: 100vh;
  background-color: #f0f8ff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-right: 1px solid #eee;
`;

const HandHolder = styled.div`
  display: flex;
  padding: 20px 10px;
`;
const RounderImage = styled.img`
  border-radius: 50%;
  height: 60px;
`;
const SingleTab = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
  //   padding: 10px;
  justify-content: center;
`;

const SvgHolderReg = styled.svg`
  opacity: ${(props) => (props.active ? "100%" : "60%")};
  background: ${(props) => (props.active ? "#004F95" : "#fffff")};
  padding: ${(props) => (props.active ? "15%" : "0%")};
  border-radius: ${(props) => (props.active ? "10%" : "0%")};
  transition: all 0.3s;

  path {
    fill: ${(props) => (props.active ? "#0077E7" : "#F78117")};
  }
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 70vh;
  overflow-y: scroll;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SuperSideBar = ({ operator }) => {
  const router = useNavigate();
  const naviagte = useLocation();
  const sideBarData = [
    {
      route: "/README.md",
      icon: (
        <ImageContainer>
          <SvgHolderReg
            active={naviagte.pathname.endsWith("/")}
            width='50'
            height='38'
            viewBox='0 0 36 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M19.758 1.67272L19.7556 1.67052C18.7564 0.776495 17.2364 0.776494 16.2372 1.67051L16.2347 1.67273L2.60756 13.947C1.37638 15.0399 2.13219 17.1113 3.81171 17.1113H5.58343V27.5243C5.58343 28.9733 6.76483 30.1547 8.21385 30.1547H13.1051C14.5541 30.1547 15.7355 28.9733 15.7355 27.5243V20.3721H20.2572V27.5243C20.2572 28.9733 21.4386 30.1547 22.8876 30.1547H27.7789C29.2279 30.1547 30.4093 28.9733 30.4093 27.5243V17.1113H32.181C33.8144 17.1113 34.6713 15.0646 33.3807 13.9429L19.758 1.67272Z'
              stroke='white'
              stroke-width='2'
            />
          </SvgHolderReg>
        </ImageContainer>
      ),
    },
    {
      route: "signup",
      icon: (
        <SvgHolderReg
          active={naviagte.pathname.includes("signup")}
          width='30'
          height='34'
          viewBox='0 0 30 34'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1 32.0814V30.3546C1 24.6327 5.63928 19.9941 11.3621 19.9941H18.2702C23.993 19.9941 28.6323 24.6327 28.6323 30.3546V32.0814'
            stroke='#F78117'
            stroke-width='2'
            stroke-linecap='round'
          />
          <path
            d='M14.8163 14.814C11.001 14.814 7.90819 11.7216 7.90819 7.907C7.90819 4.09237 11.001 1 14.8163 1C18.6314 1 21.7244 4.09237 21.7244 7.907C21.7244 11.7216 18.6314 14.814 14.8163 14.814Z'
            stroke='#F78117'
            stroke-width='2'
            stroke-linecap='round'
          />
        </SvgHolderReg>
      ),
    },
  ];

  return (
    <Main>
      <HandHolder>
        <RounderImage src={Logo} />
      </HandHolder>
      <TabsContainer>
        {sideBarData.map((singleData, index) => (
          <SingleTab
            id={singleData.route}
            key={index}
            active={naviagte.pathname.includes(singleData.route)}
            onClick={() =>
              router(`/${singleData.route}`, undefined, {
                shallow: true,
              })
            }>
            {singleData.icon}
          </SingleTab>
        ))}
      </TabsContainer>
    </Main>
  );
};

export default SuperSideBar;
