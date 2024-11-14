import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import apiRequest from "../../../lib/apiRequest";

const VerifyingEmail = () => {
  const [message, setMessage] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [success, setSuccess] = useState(false);

  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");

  useEffect(() => {
    const handleVerification = async () => {
      setVerifying(true);
      try {
        const res = await apiRequest.get(`/auth/verify?token=${token}`);
        setMessage(res.data.message);
        setSuccess(true);
      } catch (error) {
        setMessage("Failed to verify email. Please try again.");
      } finally {
        setVerifying(false);
      }
    };

    if (token) {
      handleVerification();
    }
  }, [token]);

  return (
    <div className="flex min-h-screen -mt-[56px]  bg-space-cadet flex-col ">
      <div className="max-w-md m-auto  rounded-md text-ghost-white p-10 sm:border-[1px] border-periwinkle w-full">
        <h1 className="text-2xl sm:text-3xl  text-periwinkle text font-black mb-6">
          {verifying ? "Verifying E-Mail..." : message}
        </h1>
        {success && (
          <a href="/login">
            <button
              type="submit"
              className="rounded-md font-semibold bg-ghost-white hover:bg-delft-blue hover:text-ghost-white hover:shadow-2xl text-delft-blue px-4 py-2 ml-auto w-full"
            >
              Proceed to login page
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default VerifyingEmail;
