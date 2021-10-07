import * as React from "react";
import { Helmet } from "react-helmet";
import LandingPage from "../components/LandingPage";
import Header from "../components/Header";

const IndexPage = () => {
  return (
    <main class="font-Epilogue">
      <Helmet>
        <title>Onedonate - A centralized platform for giving</title>
      </Helmet>
      <Header></Header>
      <LandingPage></LandingPage>
    </main>
  );
};

export default IndexPage;
