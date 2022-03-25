import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";
import AutomateSection from "../components/AutomateSection";
import PieSection from "../components/PieSection";
import FooterForm from "../components/FooterForm";
import FAQ from "../components/FAQ";
import SEO from "../components/SEO";
import Logo from "../images/Logo.svg";

const IndexPage = () => {
  return (
    <main className="font-Lato">
      <SEO
        title="Onedonate"
        keywords={[`onedonate`, `donate`, `donation`, `charity`]}
        image={Logo}
      />
      <Header></Header>
      <LandingPage></LandingPage>
      <AutomateSection />
      <PieSection />
      <FAQ />
      <FooterForm />
      <Footer></Footer>
    </main>
  );
};

export default IndexPage;
