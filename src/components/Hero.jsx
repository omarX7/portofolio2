import heroImage from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroImage} alt="hero_image" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'm </span>
          <br />
          <TypeAnimation
            sequence={[
              "the man",
              1000,
              "the best",
              1000,
              "better than humans",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-xl my-6 lg:text-xl">
          My name is Mohaned rashed I am a big watermelon and I am interested in
          everyting about memes. Call me at any time for work
        </p>

        <div className="my-8">
          <a
            href="/"
            className="px-6 py-3 mr-4 w-full rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 mr-4 w-full rounded-xl border border-gray-500 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
