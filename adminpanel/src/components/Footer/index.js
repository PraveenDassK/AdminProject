import React from "react";
import styled from "styled-components";
import { Progress, message } from "antd";
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 50px 0px;
`;
const CalibratedCard = styled.div`
  width: 500px;
  background: #f8fbff;
  box-shadow: 0px 4px 8px rgba(0, 79, 149, 0.25);
  border-radius: 30px;
  padding: 20px;
`;
const ProgressContainer = styled.div`
display;flex;
flex-direction: column;
width: 100%;
margin-top:30px;
`;
const StyledProgress = styled(Progress)`
  .ant-progress-outer {
    // background-color: #adcce9 !important;
    height: 20px;
    border-radius: 10px;
  }
  .ant-progress-bg {
    height: 20px !important;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .ant-progress-text {
    display: none;
  }
`;
const ProgressTitle = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  color: #004f95;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  text-transform: capitalize;
  text-align: center;
  color: #004f95;
  width: 100%;
`;
const ManualCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: center;
  background: #f8fbff;
  box-shadow: 0px 4px 8px rgba(0, 79, 149, 0.25);
  border-radius: 30px;
`;
const StyledButton = styled.button`
  width: 223.22px;
  height: 40.8px;
  background: #004f95;
  box-shadow: 0px 4px 8px -2px rgba(0, 79, 149, 0.25);
  border-radius: 5px;
  margin-top: 10px;
  outline: none;
  border: none;
  font-family: "Futura Md BT";

  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 73.37%;
  /* or 16px */

  text-align: center;
  text-transform: capitalize;

  color: #ffffff;
`;
const Footer = () => {
  const ProgressData = [
    { color: "#3DA5D9", value: 96, name: "Calibrated", display: 46 },
    { color: "#EA7317", value: 80, name: "Not Calibrated", display: 26 },
    { color: "#FEC601", value: 60, name: "Not Required", display: 16 },
  ];

  return (
    <MainDiv>
      <CalibratedCard>
        <Header>Calibrated</Header>

        <ProgressContainer>
          {ProgressData.map((eachProgress, index) => (
            <>
              <ProgressTitle>{eachProgress.name}</ProgressTitle>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px 0px",
                }}>
                <div style={{ width: "80%" }}>
                  <StyledProgress
                    percent={eachProgress.value}
                    strokeColor={eachProgress.color}
                  />
                </div>
                <div>{eachProgress.display}</div>
              </div>
            </>
          ))}
        </ProgressContainer>
      </CalibratedCard>
      <ManualCard>
        <Header>Manuals</Header>
        <img
          src='https://res.cloudinary.com/dbxmtrx4y/image/upload/v1681557031/Frame_yki4qi.png'
          alt='manual_image'
          style={{ marginTop: 10 }}
        />
        <StyledButton>User Manual</StyledButton>
        <StyledButton>Service Manual</StyledButton>
      </ManualCard>
      <ManualCard>
        <Header>Warranty</Header>
        <img
          src='https://res.cloudinary.com/dbxmtrx4y/image/upload/v1681557667/Vector_2_b5drfa.png'
          alt='warranty_image'
          style={{ marginTop: 20 }}
        />
      </ManualCard>
    </MainDiv>
  );
};

export default Footer;
