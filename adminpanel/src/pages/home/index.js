import React from "react";
import SideBar from "./../../components/SideBar/index";
import Header from "./../../components/Header";
import styled from "styled-components";
import BarChart from "./../../components/Charts/BarChart";
import DepartmentCard from "./../../components/Department";
import LineCharts from "./../../components/Charts/LineChart";
import Footer from "./../../components/Footer";
import Expenses from "./../../components/Expenses";
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
const TopBarAndMain = styled.div`
  width: 100%;
  height: 100%;
  padding: 3% 3%;
`;
const Home = () => {
  return (
    <MainDiv>
      <SideBar />
      <TopBarAndMain>
        <Header />
        <BarChart />
        <Expenses />
        <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
          <DepartmentCard />
          <LineCharts />
        </div>
        <Footer />
      </TopBarAndMain>
    </MainDiv>
  );
};

export default Home;
