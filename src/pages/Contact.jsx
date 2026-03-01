import Navbar from "../components/Layout/Navbar";
import ContactForm from "../components/ContactComponents/ConatctForm";
import ContactHero from "../components/ContactComponents/ConatctHero";
import ConatctInfo from "../components/ContactComponents/ConatctInfo";
import MapSection from "../components/ContactComponents/CTSSection";


export default function Contact() {
  return (
    <>
     <Navbar></Navbar>
      <ConatctInfo></ConatctInfo>
      <ContactForm></ContactForm>
      <ContactHero></ContactHero>
      <MapSection></MapSection>
    </>
  );
}