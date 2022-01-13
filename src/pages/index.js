import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Features from "../components/Features";
import Footer from "../components/Footer";
import AutomateSection from "../components/AutomateSection";

const IndexPage = () => {
  return (
    <main className="font-Lato">
      <Helmet>
        <title>Onedonate - A centralized platform for giving</title>
      </Helmet>
      <Header></Header>
      <LandingPage></LandingPage>
      <AutomateSection />
      <Footer></Footer>
    </main>
  );
};

export default IndexPage;
