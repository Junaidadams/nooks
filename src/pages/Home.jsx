import { motion } from "framer-motion";
import NookTypeDisplay from "../components/NookTypeDisplay";
import GetStartedSteps from "../components/GetStartedSteps";
import { getStartedSteps } from "../../constants";
import logo from "../assets/logo.png";

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
            <img src={logo} className="m-auto" />
            <h1 className="mx-auto mt-auto font-black text-4xl sm:text-5xl md:text-6xl text-delft-blue">
              Find &apos;em share &apos;em <br /> learn about &apos;em
            </h1>
            <p className="mb-auto mx-auto font-bold text-lg text-delft-blue">
              Everyone needs at least one of &apos;em
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
          <motion.p className="font-light text-lg mt-4  w-fit mx-auto">
            [nuk] noun
          </motion.p>
          <motion.p className="font-light text-lg mt-4 border-t-[1px] w-fit pt-2 mx-auto">
            a corner or recess, especially one offering seclusion or security.
            <br />
            &quot;the nook beside the fire&quot;
          </motion.p>
          <motion.p className="font-semibold text-lg mt-4">
            To us, a &quot;nook&quot; is a gem that you&apos;ve found that you
            feel a lot of people would like, or that they should experience.
            Where possible, we aim to make nooks small businesses to show
            support.
          </motion.p>
          <motion.p className="font-semibold text-lg mt-4">
            We&apos;d love to build a community of people that share a similar
            disdain for gatekeeping. At the end of the day, supporting local is
            how we keep our community thriving! Nooks can be pretty much
            anything you could possibly think of. Anything from a niche cafe
            that you discovered completely by accident to a website you use and
            have a great time using it.
          </motion.p>
        </div>
        <div className="w-3/4 lg:w-1/2 flex flex-col my-10 mx-auto">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl text-periwinkle text font-black text-center ">
            Types of nooks
          </motion.h1>
          <motion.p className="text-ghost-white mx-auto mt-5 ">
            These are some general outlines, have fun with it!
          </motion.p>
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
