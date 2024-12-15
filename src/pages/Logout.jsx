import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
// import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);

  useEffect(() => {
    const requestLogout = async () => {
      try {
        // await apiRequest.post(`/auth/logout`);
        localStorage.removeItem("authToken"); // Clear the authToken from localStorage
        updateUser(null);
      } catch (error) {
        console.error("Error logging out.", error);
      } finally {
        navigate("/");
      }
    };

    if (currentUser) {
      requestLogout();
    }
  }, [currentUser, navigate, updateUser]);

  return <div className="w-screen h-screen"></div>;
};

export default Logout;
