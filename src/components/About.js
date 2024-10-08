import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const paragraphData = [
  {
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur unde veritatis impedit quis voluptas error, voluptate praesentium beatae molestias recusandae enim laudantium totam esse sed eius? Facilis atque veritatis similique.",
  },
  {
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur unde veritatis impedit quis voluptas error, voluptate praesentium beatae molestias recusandae enim laudantium totam esse sed eius? Facilis atque veritatis similique.",
  },
  {
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur unde veritatis impedit quis voluptas error, voluptate praesentium beatae molestias recusandae enim laudantium totam esse sed eius? Facilis atque veritatis similique.",
  },
];

let result = paragraphData.map((para, index) => <div key={index} className="flex gap-4 space-y-6">
    <div className="shadow shadow-gray-400 rounded-md px-4 py-3 bg-blue-900">
        {para.paragraph}
    </div>
</div>);

const About = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="lg:relative sm:relative" ref={headerRef}>
        <div>
          <img
            src={require("./images/domenico-loia-EhTcC9sYXsw-unsplash.jpg")}
            alt=""
            className=" w-full"
            style={{ filter: "brightness(30%)", paddingTop: "5em" }}
          />
        </div>

        <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 w-full text-white lg:px-32 sm:px-10 sm:absolute sm:top-4 ">
          <h1 className="lg:text-4xl lg:w-1/2 mb-8 sm:w-full sm:text-3xl lg:font-bold">
            We engage with communities to enhance their digital skills.
          </h1>
          {result}

          <Link to="/ServicesProvided">
            <div className="flex justify-center items-center py-5 lg:text-xl sm:text-lg hover:text-gray-400 active:text-white transition hover:translate-x-1 gap-2">
              Explore more
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </div>
          </Link>

          <div className="flex justify-around mt-14 gap-3">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-5">
                Schedule in person conversation for career guidance.
              </h2>
              <button className="px-3 py-4 border">Book a session</button>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-5">
                You can schedule an online discussion and check the availability
                of mentors.
              </h2>
              <button className="px-3 py-4 border">Book a session</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
