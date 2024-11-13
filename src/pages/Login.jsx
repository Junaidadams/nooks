const Login = () => {
  return (
    <div className="flex min-h-screen -mt-[56px]  bg-space-cadet flex-col ">
      {" "}
      <form className="max-w-md m-auto  rounded-md text-ghost-white p-10 sm:border-[1px] border-periwinkle w-full">
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
          <a href="/"> Forgot your password</a> or{" "}
          <a href="/"> don&apos;t have an account?</a>
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

export default Login;
