import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <Navbar />
      <App />
      <Footer />
    </AuthContextProvider>
  </BrowserRouter>
);
