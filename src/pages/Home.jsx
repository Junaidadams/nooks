import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col">
      <section
        id="hero"
        name="hero"
        className="flex min-h-screen -mt-[56px]  bg-[#E4D9FF] flex-col w-full"
      >
        <div className="w-full h-1/3 flex flex-col p-4 m-auto">
          <div className="w-3/4 m-auto text-center"></div>
        </div>
        <div className="w-full h-1/3 flex flex-col p-4 m-auto">
          <div className="w-3/4 m-auto text-center">
            <h1 className="mx-auto mt-auto font-black text-4xl text-delft-blue">
              Find a nook <br /> Share your nook
            </h1>
            <p className="mb-auto mx-auto font-bold text-lg text-delft-blue">
              Everyone needs at least one
            </p>
          </div>
        </div>
        <div className="w-full h-1/3 min-h-[100px] flex flex-col mt-auto bg-cloud-bg bg-repeat-x animate-scroll-left-right"></div>
      </section>
      <section className="min-h-screen bg-space-cadet">
        <div className="w-3/4 m-auto text-center rounded-lg text-ghost-white ">
          <motion.h1 className="text-4xl text-periwinkle text font-black">
            nook??
          </motion.h1>
          <motion.p className="font-semibold text-lg mt-4">
            A &quot;nook&quot; is a gem that you&apos;ve found that you feel a
            lot of people would like, or that they should experience. Where
            possible, we aim to make nooks small businesses to show support.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Home;
