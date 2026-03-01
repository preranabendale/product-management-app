import React from "react";
import Navbar from "../components/Layout/Navbar";
import AboutHero from "../components/AboutComponent/AboutHero";
import CompanyInfo from "../components/AboutComponent/CompanyInfo";
import OurFeatures from "../components/AboutComponent/OurFeatures";


function About() {
  return (
    <>
    <Navbar></Navbar>
      <AboutHero />
      <CompanyInfo />
      <OurFeatures />
      
    </>
  );
}

export default About;