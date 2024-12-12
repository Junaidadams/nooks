const NoPage = () => {
  return (
    <div className="flex min-h-screen -mt-[56px] bg-delft-blue flex-col ">
      <a
        href="/"
        className="max-w-md m-auto shadow-2xl rounded-md text-periwinkle bg-space-cadet p-10 sm:border-[1px] border-periwinkle w-full"
      >
        <h1 className="text-4xl font-black text-center">
          No page found at this route.
          <br />
          <br />
          Click to go home
        </h1>
      </a>
    </div>
  );
};

export default NoPage;
