import CourseGrid from '@/components/CourseGrid'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Section1 = () => {
  return (
    <section className="w-full max-w-[1200px] flex flex-col items-center text-center space-y-8 pt-10 relative">
        
    {/* Background Images */}
    

    {/* Navbar */}
    <div className="w-full flex justify-center">
      <Navbar />
    </div>

    {/* Heading */}
    <div className="flex flex-col max-w-[980px] text-left space-y-6">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-[-0.02em] text-gray-900 font-inter">
        Unlock your{" "}
        <span className="bg-gradient-to-r from-[#2D3BF2] to-[#B832E9] text-transparent bg-clip-text">
          Data Engineering
        </span>{" "}
        potential today
        <span className="inline-block align-middle ml-2">
          <Image
            src="/image 28.svg"
            height={48}
            width={48}
            alt="image"
            className="h-12 w-12"
          />
        </span>
      </h1>

      {/* Features */}
      <div className="flex flex-col text-left md:flex-row  gap-4 md:gap-8">
        {[
          "Engage In Real-time Projects",
          "Learn from Industry Experts",
          "Gain Hands-on Experience",
        ].map((text, index) => (
          <p key={index} className="flex items-center gap-2 text-gray-700 text-base md:text-lg font-medium">
            <Image src="/Check.svg" width={20} height={20} alt="check icon" />
            {text}
          </p>
        ))}
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-col md:flex-row w-[374px] gap-4 lg:mr-[600px]">
      <button className="w-full max-w-[189px] h-12 flex justify-center items-center rounded-lg px-6 py-3 bg-gradient-to-r from-[#2D3BF2] to-[#B832E9] text-white font-medium">
        Explore Courses
      </button>
      <button className="relative w-[189px] h-[48px] flex justify-center items-center rounded-[12px] px-[26px] py-[14px] gap-[6px] text-white font-medium overflow-hidden">
<span className="absolute inset-0 bg-[#2E2E2E]"></span>
<span className="absolute inset-0 bg-gradient-to-b from-[rgba(108,108,108,0.15)] to-[rgba(255,255,255,0)]"></span>
<span className="relative z-10">Solve Questions</span>
</button>
    </div>
        <div className="mr-[5]  ">
    {/* Course Grid */}
    <CourseGrid />
    </div>
  </section>

  )
}

export default Section1
