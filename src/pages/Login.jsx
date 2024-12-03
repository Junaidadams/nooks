import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

import SubmitButton from "../components/SubmitButton";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const navigate = useNavigate();

  const { updateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setComplete(false);
    setIsLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    // console.log(email, password);

    try {
      const res = await apiRequest.post("/auth/login", {
        email,
        password,
      });
      const { token, ...userData } = res.data;

      // Store the token in localStorage
      localStorage.setItem("authToken", token);

      setSuccess(true);
    } catch (error) {
      console.error(error.response?.data?.message || "An error has occurred.");
      setError("Login attempt failed" + " " + error.response?.data?.message);
    } finally {
      setIsLoading(false);
      setComplete(true);
    }
  };

  return (
    <div className="flex min-h-screen -mt-[56px]  bg-space-cadet flex-col ">
      {" "}
      <div className="bg-wave-texture min-h-screen flex flex-col w-full animate-scroll-left-right-fast md:animate-scroll-left-right-slow">
        <form
          onSubmit={handleSubmit}
          className="max-w-md m-auto backdrop-blur-xl rounded-md text-ghost-white p-10 sm:border-[1px] border-periwinkle w-full"
        >
          <h1 className="text-2xl sm:text-3xl  text-periwinkle text font-black mb-6">
            Welcome back
          </h1>
          <div className="my-4">
            <label
              className="block text-ghost-white font-semibold text-xl mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="w-full p-2 bg-delft-blue border-b-[1px] border-periwinkle  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-xl rounded-t-lg"
              required
            />
          </div>
          <div className="my-4">
            <label
              className="block text-ghost-white font-semibold text-xl mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="w-full p-2 bg-delft-blue border-b-[1px] border-periwinkle  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-xl rounded-t-lg"
              required
            />
          </div>
          <div className="mb-6 flex">
            <a href="/"> Forgot your password or don&apos;t have an account?</a>
          </div>
          <div className="">
            <SubmitButton
              preSubmissionText="Log in"
              postSubmissionText="Logged in"
              isLoading={isLoading}
              success={success}
              error={error}
              complete={complete}
              reattempt={true}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
