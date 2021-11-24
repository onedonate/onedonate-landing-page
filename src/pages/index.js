import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Features from "../components/Features";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <main className="font-Epilogue">
      <Helmet>
        <title>Onedonate - A centralized platform for giving</title>
      </Helmet>
      <Header></Header>
      <LandingPage></LandingPage>
      <Features></Features>
      <Footer></Footer>
    </main>
  );
};

export default IndexPage;
