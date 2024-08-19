import about from "../assets/about.jpeg";
const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col py-6 md:py-0">
          <div className="mx-6 my-auto">
            <h2 className="text-4xl primary-color font-bold mb-6">About Me</h2>
            <p className="text-base lg:text-lg">
              To talk about mohamed rashed you should make alot of books about
              how much he is fantstic to prove that you should stand up and look
              at the mirror and ask it Who is the best developer in the world?
              the mirror will answer you of course he is mohamed ahmed rashed
              .Now you know who is omar saqr. he is the best and anyone else
              like Ye7ya and Mohamed Tamer is ✡🍑👩🏿‍🤝‍🧑🏿. And that's
              enough😊🦅. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Non porro blanditiis, impedit eaque voluptatem iure officia
              libero officiis dignissimos quod ducimus repellendus, expedita
              inventore distinctio ratione temporibus. Aliquam, nam a!
            </p>
          </div>
        </div>
        <img
          src={about}
          className="mx-auto rounded-3xl py-8 md:py-0"
          alt="about"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
export default About;
