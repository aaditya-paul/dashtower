import React from "react";
function Process() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up">
              How We Work
            </h2>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Dashtower helps your brand to get on the market as quickly as
              possible. We work in a three step process.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
            >
              <div
                aria-hidden="true"
                className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
                style={{
                  width: "calc(100% - 32px)",
                  left: "calc(50% + 48px)",
                  top: "32px",
                }}
                data-aos="fade-in"
                data-aos-delay="200"
              ></div>
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="stroke-current text-purple-300"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-100"
                  d="M26 28h12M26 32h12M26 36h5"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
              <h4 className="h4 mb-2">
                <span className="text-gray-400">1</span>. Identify
              </h4>
              <p className="text-lg text-gray-400 text-center">
                We Identify Your Brand Needs and Document Them Carefully.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                aria-hidden="true"
                className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
                style={{
                  width: "calc(100% - 32px)",
                  left: "calc(50% + 48px)",
                  top: "32px",
                }}
                data-aos="fade-in"
                data-aos-delay="400"
              ></div>
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g fill="none" fillRule="evenodd">
                  <path
                    className="stroke-current text-purple-300"
                    d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <path
                    className="stroke-current text-purple-100"
                    strokeWidth="2"
                    strokeLinecap="square"
                    d="M36 32l-4-3-4 3V22h8z"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">
                <span className="text-gray-400">2</span>. Ideate
              </h4>
              <p className="text-lg text-gray-400 text-center">
                We Design a Carefully Crafted Plan to Help You Recognized and
                Grow Your Business.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="stroke-current text-purple-300"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 35l4 4 12-15"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-100"
                  d="M42 29h-3M42 34h-7M42 39H31"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
              <h4 className="h4 mb-2">
                <span className="text-gray-400">3</span>. Work
              </h4>
              <p className="text-lg text-gray-400 text-center">
                We Work with You and Your Team to Help Generate Leads from the
                Internet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;