import { motion } from "framer-motion";
import NookTypeDisplay from "../components/NookTypeDisplay";
import GetStartedSteps from "../components/GetStartedSteps";
import { getStartedSteps } from "../../constants";

const Home = () => {
  return (
    <div className="flex flex-col">
      <section
        id="hero"
        name="hero"
        className="flex min-h-screen -mt-[56px]  bg-periwinkle flex-col w-full"
      >
        <div className="w-full h-1/3 flex flex-col p-4 m-auto">
          <div className="w-3/4 m-auto text-center"></div>
        </div>
        <div className="w-full h-1/3 flex flex-col p-4 m-auto">
          <div className="w-3/4 m-auto text-center">
            <h1 className="mx-auto mt-auto font-black text-4xl sm:text-5xl md:text-6xl text-delft-blue">
              Find or share <br />a &quot;nook&quot;
            </h1>
            <p className="mb-auto mx-auto font-bold text-lg text-delft-blue">
              Everyone needs at least one
            </p>
          </div>
        </div>
        <div className="w-full h-1/3 min-h-[100px] flex flex-col mt-auto bg-cloud-bg bg-repeat-x animate-scroll-left-right-fast md:animate-scroll-left-right-slow"></div>
      </section>
      <section className="min-h-screen bg-space-cadet flex flex-col">
        <div className="w-3/4 lg:w-1/2 m-auto text-center rounded-lg text-ghost-white ">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl text-periwinkle text font-black">
            nook
          </motion.h1>
          <motion.p className="font-semibold text-lg mt-4">[nuk] noun</motion.p>
          <motion.p className="font-semibold text-lg mt-4">
            A &quot;nook&quot; is a gem that you&apos;ve found that you feel a
            lot of people would like, or that they should experience. Where
            possible, we aim to make nooks small businesses to show support.
          </motion.p>
          <motion.p className="font-semibold text-lg mt-4">
            We'd love to build a community of
          </motion.p>
        </div>
        <div className="w-3/4 lg:w-1/2 flex flex-col my-10 mx-auto">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl text-periwinkle text font-black text-center">
            Types of nook
          </motion.h1>
          <NookTypeDisplay />
        </div>
      </section>
      <section className="min-h-screen bg-delft-blue flex flex-col">
        <div className="w-full h-1/3 min-h-[100px] flex flex-col mb-auto bg-cloud-bg-reversed bg-repeat-x animate-scroll-left-right-fast md:animate-scroll-left-right-slow"></div>
        <div className="w-3/4 lg:w-1/2 mx-auto text-center rounded-lg text-ghost-white ">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl text-ghost-white text font-black">
            Get started
          </motion.h1>
          <motion.p className="font-semibold text-periwinkle text-lg mt-4">
            Start discovering nooks straight away! <br /> Here&apos;s how:
          </motion.p>
        </div>
        <div className="w-3/4 lg:w-1/2 flex flex-col my-10 mx-auto">
          {/* <motion.h1 className="text-4xl sm:text-5xl md:text-6xl text-periwinkle text font-black text-center">
            Types of nook
          </motion.h1> */}
          <GetStartedSteps getStartedArray={getStartedSteps} />
        </div>
      </section>
    </div>
  );
};

export default Home;
