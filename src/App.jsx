import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import TermsAndConditions from "./pages/T&C";
import ProfilePage from "./pages/ProfilePage";
import Logout from "./pages/Logout";

import VerifyEmail from "./pages/utilPages/VerifyEmail";

import NoPage from "./pages/NoPage";
import RequireAuth from "./pages/wrapper/Wrapper";

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
      <Route
        path="/profile-page"
        element={
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        }
      />
      <Route
        path="/logout"
        element={
          <RequireAuth>
            <Logout />
          </RequireAuth>
        }
      />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
