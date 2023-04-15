import React from "react";
import styled from "styled-components";
import { PieChart } from "react-minimal-pie-chart";
import { Progress } from "antd";
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 50px 0px;
`;
const ManualCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  justify-content: center;
  align-items: center;
  background: #f8fbff;
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
const TotalTimeDiv = styled.div`
  font-family: "Futura Md BT";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;

  /* Blue */

  color: #004f95;
`;
const TotalTimeSubTitleDiv = styled.div`
  font-family: "Futura Md BT";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  text-align: center;
  text-transform: capitalize;

  /* Blue */

  color: #004f95;
`;
const Bottomtext = styled.div`
  font-family: "Futura Md BT";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  text-transform: capitalize;

  color: #004f95;
`;
const ProgressContainer = styled.div`
display;flex;
flex-direction: column;
width: 100%;
margin-top:30px;
margin-left:30px;
`;
const StyledProgress = styled(Progress)`
  .ant-progress-outer {
    height: 50px;
    border-radius: 30px;
  }
  .ant-progress-bg {
    height: 50px !important;
    border-radius: 30px;
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
const Expenses = () => {
  const ProgressData = [
    { color: "#29A343", value: 96, name: "Cleared", display: 36 },
    { color: "#E12C33", value: 60, name: "Not cleared", display: 26 },
  ];
  return (
    <MainDiv>
      <ManualCard>
        <Header>Expenses</Header>
        <PieChart
          data={[
            {
              title: "Service Charges",
              value: 45000,
              color: "#004F95",
              label: "45000 ",
            },
            {
              title: "CMC",
              value: 15000,
              color: "#EA7317",
              label: "15000 ",
            },
            {
              title: "spares",
              value: 30000,
              color: "#3DA5D9",
              label: "30000 ",
            },
            {
              title: "AMC",
              value: 10000,
              color: "#FEC601",
              label: "10000 ",
            },
          ]}
          totalValue={100000}
          lineWidth={50}
          paddingAngle={3}
          radius={50}
          style={{
            height: "250px", // Set the height to 200 pixels
            width: "200px", // Set the width to 200 pixels
            padding: "10px",
          }}
          label={({ dataEntry }) => dataEntry.label}
          labelStyle={{
            fontSize: "5px",
            fontWeight: "bold",
            fill: "#fff",
            pointerEvents: "none",
            transform: "translate(0,5)",
          }}
          labelPosition={70}
        />
      </ManualCard>
      <ManualCard>
        <Header>In service</Header>
        <img
          src='https://res.cloudinary.com/dbxmtrx4y/image/upload/v1681561317/inservice_icon_o3icsa.png'
          alt='service_image'
          style={{ margin: "50px 40px 20px 40px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "30px",
          }}>
          <div>
            <TotalTimeDiv>Total Services</TotalTimeDiv>
            <TotalTimeSubTitleDiv>38</TotalTimeSubTitleDiv>
          </div>
          <div>
            <TotalTimeDiv>Open Services</TotalTimeDiv>
            <TotalTimeSubTitleDiv>18</TotalTimeSubTitleDiv>
          </div>
        </div>
      </ManualCard>
      <ManualCard>
        <Header>Total Assets</Header>
        <PieChart
          data={[
            {
              title: "Service Charges",
              value: 35000,
              color: "#004F95",
              label: "45000 ",
            },
            {
              title: "CMC",
              value: 15000,
              color: "#EA7317",
              label: "15000 ",
            },
            {
              title: "spares",
              value: 30000,
              color: "#3DA5D9",
              label: "30000 ",
            },
            {
              title: "AMC",
              value: 10000,
              color: "#FEC601",
              label: "9000 ",
            },
            {
              title: "AMC",
              value: 10000,
              color: "#73BFB8",
            },
          ]}
          totalValue={100000}
          lineWidth={20}
          paddingAngle={3}
          radius={50}
          style={{
            height: "160px", // Set the height to 200 pixels
            width: "200px", // Set the width to 200 pixels
            padding: "10px",
          }}
        />
        <Bottomtext>46</Bottomtext>
      </ManualCard>
      <ManualCard>
        <Header>Incident Management</Header>
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
                <div style={{ fontSize: "24px", alignItems: "center" }}>
                  {eachProgress.display}
                </div>
              </div>
            </>
          ))}
        </ProgressContainer>
      </ManualCard>
    </MainDiv>
  );
};

export default Expenses;
