import './App.css';
// Import Bootstrap //
import "bootstrap/dist/css/bootstrap.min.css";
// Import React Components //
import Main from "./components/main";
import Navbar from "./components/navbar";
import CloudConcepts from "./components/cloudConcepts";
import SecurityAndCompliance from "./components/securityAndCompliance";
import Technology from "./components/technology";
import BillingAndPricing from "./components/billingAndPricing";
import Contact from "./components/contact";

function App() {
  return (
    <>
    <Main/>
    <Navbar/>
    <CloudConcepts/>
    <SecurityAndCompliance/>
    <Technology/>
    <BillingAndPricing/>
    <Contact/>
    </>
  );
}

export default App;