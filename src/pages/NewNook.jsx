import { useState } from "react";
import apiRequest from "../../lib/apiRequest";
import SubmitButton from "../components/SubmitButton";

const NewNook = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setComplete(false);
    setIsLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await apiRequest.post("/auth/register", { email });
      setSuccess(true);
    } catch (error) {
      console.error(error.response?.data?.message || "An error has occurred");
      setError("Failed to create nook." + " " + error.response?.data?.message);
    } finally {
      setIsLoading(false);
      setComplete(true);
    }
  };

  return (
    <div className="flex min-h-screen bg-periwinkle -mt-[56px] bg- flex-col ">
      {" "}
      <form
        onSubmit={handleSubmit}
        className="max-w-md m-auto bg-black bg-opacity-5 rounded-md text-ghost-white p-10 sm:border-[1px] border-space-cadet w-full "
      >
        {" "}
        <div className="">
          <SubmitButton
            preSubmissionText="Create nook"
            postSubmissionText="Nook created"
            isLoading={isLoading}
            success={success}
            error={error}
            complete={complete}
            reattempt={true}
          />
        </div>{" "}
      </form>
    </div>
  );
};

export default NewNook;
