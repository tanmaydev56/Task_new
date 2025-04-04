
import Section1 from "@/sections/Section1";
import Section2 from "@/sections/Section2";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center  px-4">
      <div className="hidden lg:block absolute z-[-1] top-[50px] right-[0px]">
          <Image
            src="/Realistic Abstract 3.png"
            width={500}
            height={600}
            alt="Background"
            className="w-[500px] h-auto"
          />
        </div>
        <div className="hidden lg:block absolute z-[-1] top-[270px] left-[0px]">
          <Image
            src="/Realistic Abstract 4.png"
            width={500}
            height={600}
            alt="Background"
            className="w-[500px] h-auto"
          />
        </div>
     <Section1/>
     <Section2/>
    </main>
  );
}
