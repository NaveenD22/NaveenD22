import React from "react";
import { AboutMeContents } from "./constants/constants";
import { FaCode, FaArrowDown } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import pdf from "./../assets/Naveen_D_CV.pdf";
const Info = () => {
  const onButtonClick = () => {
    const pdfUrl = pdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Naveen-Dudhyal-CV"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className="flex flex-col justify-center sm:justify-around items-center gap-8 p-10 sm:p-24"
      id="About"
    >
      <h1 className="text-4xl font-bold sm:mb-20 flex gap-2  items-center">
        <GoPerson />
        About Me
      </h1>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center w-full ">
        <img
          src={AboutMeContents?.icon}
          alt="logo"
          className="h-96 object-contain mb-10 sm:mb-0"
        />

        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{AboutMeContents?.name}</h1>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-semibold">{AboutMeContents?.role} </h3>
            <p className="text-2xl">
              <FaCode />
            </p>
          </div>
          <p className="text-lg sm:w-[30rem] w-[20rem]">
            {AboutMeContents?.des}
          </p>
          <p className="text-xl text-blue-600 font-medium">
            Age: <span className="text-black">{AboutMeContents?.age}</span>
          </p>
          <p className="text-xl text-blue-600 font-medium">
            Phone: <span className="text-black">{AboutMeContents?.phone}</span>
          </p>
          <p className="text-xl text-blue-600 font-medium">
            Email: <span className="text-black">{AboutMeContents?.email}</span>
          </p>
          <p className="text-xl text-blue-600 font-medium">
            Place: <span className="text-black">{AboutMeContents?.place}</span>
          </p>
          <button
            className="bg-indigo-900 font-semibold flex p-4 gap-2 items-center rounded-3xl w-40 justify-center text-white shadow-black/80 shadow-xl text-xl"
            onClick={onButtonClick}
          >
            Resume{" "}
            <span className="rounded-full bg-white p-1 text-black">
              <FaArrowDown />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
