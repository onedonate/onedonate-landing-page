import * as React from "react";
import { Helmet } from "react-helmet";
import LandingPage from "../components/LandingPage";

const IndexPage = () => {
  return (
    <main class="font-Epilogue">
      <Helmet>
        <title>Onedonate - A centralized platform for giving</title>
      </Helmet>
      <LandingPage></LandingPage>
    </main>
  );
};

export default IndexPage;
