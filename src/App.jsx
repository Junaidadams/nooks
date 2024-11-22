import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import TermsAndConditions from "./pages/T&C";
import Archive from "./pages/Archive";

import VerifyEmail from "./pages/utilPages/VerifyEmail";

import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
