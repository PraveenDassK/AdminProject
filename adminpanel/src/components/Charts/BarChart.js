import React, { useState } from "react";
import styled from "styled-components";
import { Radio } from "antd";
import "antd/dist/antd.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const MainDiv = styled.div`
  width: 100%;
  background: #f8fbff;
  box-shadow: 0px 4px 8px -2px rgba(0, 79, 149, 0.25);
  border-radius: 30px;
  margin: 20px 0px;
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
const RadioButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const BarContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3%;
`;
const BottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
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
const BarCharts = () => {
  const [value3, setvalue3] = useState("Days");
  const [value, setvalue] = useState("Recorded");

  const data = [
    { name: "Week 1", uv: 5 },
    { name: "Week 2", uv: 10 },
    { name: "Week 3", uv: 15 },
    { name: "Week 4", uv: 20 },
    { name: "Week 5", uv: 18 },
  ];

  const onChange3 = (e) => {
    setvalue3(e.target.value);
  };
  const onChange = (e) => {
    setvalue(e.target.value);
  };

  const options = [
    {
      label: "Days",
      value: "Days",
    },
    {
      label: "Week",
      value: "Week",
    },
    {
      label: "Month",
      value: "Month",
    },
    {
      label: "Custom",
      value: "Custom",
    },
  ];
  const RecordData = [
    {
      label: "Recorded",
      value: "Recorded",
    },
    { label: "Cleared", value: "Cleared" },
  ];

  return (
    <MainDiv>
      <HeaderName>Total Incidents Recorded</HeaderName>
      <RadioButtonContainer>
        <div>
          <Radio.Group
            options={options}
            onChange={onChange3}
            value={value3}
            optionType='button'
            buttonStyle='solid'
          />
        </div>
        <div>
          <Radio.Group
            options={RecordData}
            onChange={onChange}
            value={value}
            optionType='button'
            buttonStyle='solid'
          />
        </div>
      </RadioButtonContainer>
      <BarContainer>
        <BarChart width={1000} height={400} data={data}>
          <XAxis dataKey='name' stroke='#2A2A2A' />
          <YAxis tickLine={false} tickCount={6} domain={[0, 25]} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 100,
              right: 30,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          />
          <CartesianGrid stroke='#ccc' vertical={false} />
          <Bar dataKey='uv' fill='#FEC601' barSize={50} />
        </BarChart>
      </BarContainer>
      <BottomDiv>
        <TitleDiv>
          X-Axis <SubTitleDiv> : Weeks</SubTitleDiv>
        </TitleDiv>
        <TitleDiv>
          Y-axis <SubTitleDiv> : Incidents</SubTitleDiv>
        </TitleDiv>
      </BottomDiv>
    </MainDiv>
  );
};

export default BarCharts;
