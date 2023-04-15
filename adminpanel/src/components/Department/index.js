import React from "react";
import styled from "styled-components";
import { Progress } from "antd";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background: #f8fbff;
  padding: 2% 3%;
  box-shadow: 0px 4px 8px rgba(0, 79, 149, 0.25);
  border-radius: 30px;
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
const ColorDiv = styled.div`
  width: 48px;
  height: 20px;
  background: ${(props) => props.color};
  border-radius: 2px;
`;
const ColorDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 5px;
`;
const ProgressContainer = styled.div`
display;flex;
flex-direction: column;
width: 100%;
margin-top:30px;
`;
// const StyledProgress = styled(Progress)`
//   .ant-progress-outer {
//     background-color: #adcce9 !important;
//     height: 20px;
//     border-radius: 10px;
//   }
//   .ant-progress-bg {
//     height: 20px !important;
//     border-top-left-radius: 10px;
//     border-bottom-left-radius: 10px;
//   }
//   .ant-progress-inner {
//     position: relative;
//     display: inline-block;
//     width: 100%;
//     overflow: hidden;
//     vertical-align: middle;
//     background-color: transparent !important;
//     border-radius: 100px;
//   }
//   .ant-progress-text {
//     display: none;
//   }
// `;
const StyledProgress = styled(Progress)`
  .ant-progress-outer {
    height: 20px;
  }
  .ant-progress-bg {
    height: 20px !important;
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
const SeeMoreDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;
  text-transform: capitalize;
  color: #004f95;
`;
const DepartmentCard = () => {
  const colorData = ["#004F95", "#3DA5D9", "#73BFB8", "#FEC601", "#EA7317"];
  const ProgressData = [
    { color: "#004F95", value: 91, name: "Laboratory" },
    { color: "#3DA5D9", value: 53, name: "Radiology" },
    { color: "#73BFB8", value: 98, name: "ICU" },
    { color: "#FEC601", value: 75, name: "Operation Theatre" },
    { color: "#EA7317", value: 36, name: "OPD" },
  ];
  return (
    <MainContainer>
      <Header>Departments</Header>
      <ColorDivContainer>
        {colorData.map((eachColor, index) => (
          <div>
            <ColorDiv color={eachColor} />
          </div>
        ))}
      </ColorDivContainer>
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
              <div style={{ width: "100%" }}>
                <StyledProgress
                  percent={eachProgress.value}
                  strokeColor={eachProgress.color}
                />
              </div>
              <div style={{ marginLeft: "10px" }}>{eachProgress.value}</div>
            </div>
          </>
        ))}
      </ProgressContainer>
      <SeeMoreDiv>SeeMore</SeeMoreDiv>
    </MainContainer>
  );
};

export default DepartmentCard;
