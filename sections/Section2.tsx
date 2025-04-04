import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="bg-[#F7F7FB] w-[1519px] mt-8 min-h-screen flex flex-col items-center justify-center text-center space-y-10 px-4 py-16">
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center space-y-3">
        <h3 className="uppercase text-xs sm:text-sm tracking-wide text-gray-500 font-semibold">
          Courses
        </h3>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Explore Our Data Engineering <br />
          <span className="relative inline-block">
            Courses
            <span className="absolute left-0 bottom-0 w-full h-[4px] bg-purple-500 rounded-full"></span>
          </span>
        </h2>

        <p className="text-gray-600 text-base sm:text-lg max-w-xl">
          Unlock your potential with our expert-led courses.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg bg-white p-6 w-full max-w-[360px] mx-auto text-center"
            >
              {/* Course Image */}
              <Image
                src="/image 7.png"
                width={320}
                height={180}
                alt="Course Thumbnail"
                className="rounded-lg mx-auto"
              />

              <div className="flex w-full justify-between ">
              {/* Course Tag */}

              <span className="inline-block bg-gray-200 text-gray-700 text-xs sm:text-sm px-3 py-1 rounded-full mt-4">
                ENGLISH
              </span>
                {/* Pricing */}
                <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-gray-500 line-through text-xs sm:text-sm">$29.00</span>
                <span className="text-[#5751E1] font-semibold text-lg">$9.00</span>
              </div>
              </div>

              {/* Course Title */}
              <h3 className="mt-2 text-left text-base sm:text-lg font-semibold text-gray-900">
                Workflow Orchestration with Apache Airflow for Data Engineering
              </h3>

            

              {/* Instructor & Rating */}
              <div className="flex items-center justify-center mt-3 space-x-2">
                <Image
                  src="/sir.png"
                  width={24}
                  height={24}
                  className="rounded-full"
                  alt="Instructor"
                />
                <div className="w-[334px] flex justify-between">
                <span className="text-xs sm:text-sm text-gray-700">Darshil Parmar</span>
                <span className="flex items-center text-yellow-500 text-xs sm:text-sm">
                  ⭐ 5 (800+ Reviews)
                </span>
                </div>
                </div>
              

              {/* Enroll Button */}
              <div className="w-[314px] flex justify-end">
  <button
    className="mt-4 bg-gradient-to-r from-[#2D3BF2] to-[#B832E9] text-white px-5 py-2 rounded-lg w-[124px] h-[36px] flex justify-center items-center font-semibold hover:opacity-90 transition"
  >
    Enroll Now
  </button>
</div>

            </div>
          ))}
      </div>
    </section>
  );
};

export default Section2;
