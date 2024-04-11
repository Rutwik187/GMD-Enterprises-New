import React from "react";
import Heading from "./ui/Heading";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <MaxWidthWrapper className="mt-8">
      <Heading text="Our" coloredText="Categories" />

      <div className="mt-[50px] flex flex-wrap gap-5 justify-center items-center ">
        <Link
          href="/packaging"
          className="relative flex items-center justify-center w-[300px] h-[300px] transition-transform transform hover:scale-105 shadow-md duration-300 ease-in-out cursor-pointer"
        >
          <Image
            src="/cat-1.webp"
            alt="category"
            className="w-full h-full object-cover rounded-[24px]"
            width={1000}
            height={1000}
          />
          <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
            <h2 className="mt-[24px] font-semibold text-4xl text-white">
              Industrial packaging
            </h2>
          </div>
        </Link>
        <Link
          href="/packaging"
          className="relative flex items-center justify-center w-[300px] h-[300px] transition-transform transform hover:scale-105 shadow-md duration-300 ease-in-out cursor-pointer"
        >
          <Image
            src="/cat-2.jpeg"
            alt="category"
            className="w-full h-full object-cover rounded-[24px]"
            width={1000}
            height={1000}
          />
          <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
            <h2 className="mt-[24px] font-semibold text-4xl text-white">
              Industrial Lubricant
            </h2>
          </div>
        </Link>
        <Link
          href="/packaging"
          className="relative flex items-center justify-center w-[300px] h-[300px] transition-transform transform hover:scale-105 shadow-md duration-300 ease-in-out cursor-pointer"
        >
          <Image
            src="/cat-2.jpeg"
            alt="category"
            className="w-full h-full object-cover rounded-[24px]"
            width={1000}
            height={1000}
          />
          <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
            <h2 className="mt-[24px] font-semibold text-4xl text-white">
              Allied value added services
            </h2>
          </div>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Categories;
