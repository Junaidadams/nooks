import apiRequest from "../../lib/apiRequest";

const Registration = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const username = formData.get("username");

    try {
      const res = await apiRequest.post("/auth/register", {
        email,
        password,
        username,
      });
    } catch (error) {
      console.error(error.response?.data?.message || "An error has occurred.");
    }
  };
  return (
    <div className="flex min-h-screen -mt-[56px]  bg-space-cadet flex-col ">
      {" "}
      <form
        onSubmit={handleSubmit}
        className="max-w-md m-auto  rounded-md text-ghost-white p-10 sm:border-[1px] border-periwinkle w-full"
      >
        <h1 className="text-2xl sm:text-3xl  text-periwinkle text font-black mb-6">
          Register
        </h1>
        <div className="my-4">
          <label
            className="block text-ghost-white font-semibold text-xl mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            name="username"
            type="username"
            id="username"
            className="w-full p-2 bg-delft-blue border-b-[1px] border-periwinkle  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-xl rounded-t-lg"
            required
          />
        </div>
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
          <label className="block text-ghost-white text-lg" htmlFor="password">
            Agree to{" "}
            <a href="/terms-of-service" className="text-blue-600">
              terms of service
            </a>
            ?
          </label>
          <input
            name="agree"
            type="checkbox"
            id="agree"
            className="shadow-sm w-4 mr-auto my-auto ml-2 p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="rounded-md font-semibold bg-ghost-white hover:bg-delft-blue hover:text-ghost-white hover:shadow-2xl text-delft-blue px-4 py-2 ml-auto w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
