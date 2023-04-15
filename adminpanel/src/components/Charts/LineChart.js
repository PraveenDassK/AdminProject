import React, { useState } from "react";
import styled from "styled-components";
import { Radio, Tabs } from "antd";
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
} from "recharts";

const MainDiv = styled.div`
  width: 100%;
  background: #f8fbff;
  box-shadow: 0px 4px 8px -2px rgba(0, 79, 149, 0.25);
  border-radius: 30px;
  padding: 40px;
`;
const HeaderName = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #004f95;
`;

const BarContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8%;
`;
const BottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 30px;
  padding: 10px 0px;
`;
const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Futura Md BT";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  text-transform: capitalize;

  color: #004f95;
`;
const SubTitleDiv = styled.div`
  font-family: "Futura Md BT";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  text-transform: capitalize;
  margin-left: 5px;
  color: #2a2a2a;
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

  text-transform: capitalize;

  /* Blue */

  color: #004f95;
`;
const StyledLine = styled(LineChart)``;
const LineCharts = () => {
  const [value3, setvalue3] = useState("left");
  const data = [
    { name: "1", uv: 0 },
    { name: "2", uv: 10 },
    { name: "3", uv: 2 },
    { name: "4", uv: 10 },
    { name: "5", uv: 11 },
    { name: "6", uv: 3 },
    { name: "7", uv: 5 },
    { name: "8", uv: 15 },
  ];

  const onChange3 = (e) => {
    setvalue3(e.target.value);
  };

  return (
    <MainDiv>
      <HeaderName>Total Downtime</HeaderName>

      <BarContainer>
        <StyledLine
          width={550}
          height={280}
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis dataKey='name' />
          <YAxis tickCount={8} domain={[0, 12]} dataKey='value' />
          <Tooltip />
          <Legend />
          {/* <Line type='monotone' dataKey='pv' stroke='#8884d8' /> */}
          <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
        </StyledLine>
      </BarContainer>
      <BottomDiv>
        <TitleDiv>
          X-Axis <SubTitleDiv> : Weeks</SubTitleDiv>
        </TitleDiv>
        <TitleDiv>
          Y-axis <SubTitleDiv> : Incidents</SubTitleDiv>
        </TitleDiv>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            marginLeft: 10,
          }}>
          <TotalTimeDiv>Total DownTime</TotalTimeDiv>
          <TotalTimeSubTitleDiv>12Days 3h 20m </TotalTimeSubTitleDiv>
        </div>
      </BottomDiv>
    </MainDiv>
  );
};

export default LineCharts;
