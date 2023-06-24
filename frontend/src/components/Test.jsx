import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSend } from "react-icons/io";
import { AiFillAudio } from "react-icons/ai";
const Test = () => {
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the answer
    console.log("Submitted answer:", answer);
    // Reset the answer state
    setAnswer("");
  };

  return (
    <div className="container mx-auto">
      <div className=" p-4 ">
        <h1 className="text-5xl font-bold text-white">
          You can <span className="text-yellow-500">Prepare better</span> with
          us
        </h1>
        <p className="text-white">
          {" "}
          The Al-powered app will help you improve yourself by helping you for
          practing interview.
        </p>
      </div>
      <div className="mx-auto w-1/2 border p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Question Answer Page
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <textarea
            value={answer}
            onChange={handleAnswerChange}
            className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 border"
            rows="6"
            placeholder="Enter your answer..."
          ></textarea>
          <div className="mt-4">
            <Link to="/microphone">
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15l-4-4m0 0l4-4m-4 4h14"
                />
              </svg> */}
                <AiFillAudio />
              </button>
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 ml-4"
            >
              <IoMdSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Test;
