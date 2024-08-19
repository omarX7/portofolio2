const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-black p-5 sm:p-20" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold primary-color leading-tight">
          {" "}
          Contact Me{" "}
        </h2>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="p-10">
            <form action="https://getform.io/f/axojlkjb" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2 relative">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Your name"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600 "
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2 relative">
                    <input
                      type="text"
                      name="email"
                      id=""
                      placeholder="Your Email"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600 "
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2 relative">
                    <textarea
                      name="message"
                      id=""
                      placeholder="Your Message"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600 "
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full bg-primary-color text-white font-semibold p-4 rounded-md mt-2"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
