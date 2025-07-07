import { workprocess } from "@/json/workprocess";
import { fadeUphover } from "../HOC/animation";
import AnimateOnView from "../HOC/Animation/MotionWrapper";

export default function WorkingProcess() {
  return (
    <section className="w-full bg-navbg text-center text-white h-[1800px] sm:h-[900px] lg:h-[600px] relative z-10">
       <div className="overflow-hidden">
      <div className="mb-12 text-start z-[999] pt-10">
        <p className="md:px-12 lg:px-24 text-center md:text-left text-lg mb-2 text-gray-300">
          Work Flow
        </p>
        <h2 className="md:px-12 lg:px-24 text-center md:text-left text-5xl font-bold">
          Our Working Process
        </h2>
      </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto h-[1800px] sm:h-[900px] lg:h-[600px]">
          {workprocess.map((step, index) => (
            <AnimateOnView
              key={index}
              once={false}
              whileHover={fadeUphover}
              className="h-full z-50"
            >
              <div className="p-6 transition-colors duration-300 bg-transparent hover:bg-white/10 h-full flex flex-col items-center text-center">
                <h3 className="text-5xl font-extrabold text-cyan mb-6 mt-2">
                  {step.number}
                </h3>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="max-w-xs text-white mx-auto">{step.description}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}