"use client";

import Image from "next/image";
import CountUp from "react-countup";

export default function StatsSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-28 md:px-32 lg:px-48 py-12 gap-10">
      {/* Image Section (top for sm/md, left for lg+) */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[450px] rounded-xl overflow-hidden">
          <Image
            src="/images/about/person.png"
            alt="Team working"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

   
      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-y-10 text-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            <CountUp start={0} end={60} duration={3} />+
          </h2>
          <p className="text-lg font-bold">Happy Clients</p>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            <CountUp start={0} end={60} duration={3} />+
          </h2>
          <p className="text-lg font-bold">Projects</p>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            <CountUp start={0} end={13470} duration={3} />+
          </h2>
          <p className="text-lg font-bold">Hours of Support</p>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            <CountUp start={0} end={30} duration={3} />+
          </h2>
          <p className="text-lg font-bold">Talented Gsoftians</p>
        </div>
      </div>
    </div>
  );
}
