import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
`;
const SignInButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
    border:none;

  width: 149px;
  height: 39px;
  background: #004f95;
  box-shadow: 2px 4px 8px -2px rgba(0, 79, 149, 0.2);
  border-radius: 5px;
  font-family: ;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;
const AddNewButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
    border:none;

  width: 149px;
  height: 44px;
  background: #004f95;
  box-shadow: 2px 4px 8px -2px rgba(0, 79, 149, 0.2);
  border-radius: 5px;
  font-family: ;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
  padding-right: 30px;
  gap: 20px;
`;
const SignUpButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 149px;
  height: 39px;
    border:none;

  background: #f78117;
  box-shadow: 2px 4px 8px -2px rgba(0, 79, 149, 0.25);
  border-radius: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
  gap: 80px;
`;
const Header = () => {
  return (
    <HeaderDiv>
      <SearchContainer>
        <SearchBar />
        <AddNewButton>
          <svg
            width='34'
            height='34'
            viewBox='0 0 44 44'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g filter='url(#filter0_d_1_819)'>
              <circle
                cx='22'
                cy='22'
                r='13'
                stroke='white'
                stroke-width='2'
                shape-rendering='crispEdges'
              />
            </g>
            <path
              d='M21.106 15.7002H22.8939V21.1385H28.3V22.8515H22.8939V28.3002H21.106V22.8515H15.7V21.1385H21.106V15.7002Z'
              fill='white'
            />
            <defs>
              <filter
                id='filter0_d_1_819'
                x='0'
                y='0'
                width='34'
                height='34'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'>
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feMorphology
                  radius='2'
                  operator='erode'
                  in='SourceAlpha'
                  result='effect1_dropShadow_1_819'
                />
                <feOffset />
                <feGaussianBlur stdDeviation='5' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.952941 0 0 0 0 0.580392 0 0 0 0 0.117647 0 0 0 1 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_1_819'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow_1_819'
                  result='shape'
                />
              </filter>
            </defs>
          </svg>
          Add New
        </AddNewButton>
      </SearchContainer>
      <ButtonContainer>
        <SignInButton>Sign in</SignInButton>

        <SignUpButton>Sign up</SignUpButton>
      </ButtonContainer>
    </HeaderDiv>
  );
};

export default Header;
