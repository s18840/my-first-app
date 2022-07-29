import React from "react";
import Navbar from "../components/Navigation/NavBar";
import Header from "../components/Header/Header";
import {PageWrapper, SubTitle, Title} from "../styles/GlobalStyle";
import Clock from "../components/Dashboard/Clock";
import {
  DashboardContentWrapper,
  DashboardWrapper,
} from "../styles/DashboardStyles";
import NextGrading from "../components/Dashboard/NextGrading";

function Dashboard() {

  const firstName = localStorage.getItem("fullName").split(" ")[0];

  return (
    <>
      <Navbar/>
      <Header/>
      <PageWrapper>
        <DashboardWrapper>
          <DashboardContentWrapper>
            <Title>Hi, {firstName}</Title>
            <SubTitle>grading</SubTitle>
            <NextGrading/>
            <SubTitle>your targets</SubTitle>
          </DashboardContentWrapper>
          <Clock/>
        </DashboardWrapper>
      </PageWrapper>
    </>
  );
}

export default Dashboard;
