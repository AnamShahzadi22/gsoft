import { workprocess } from "@/json/workprocess";
import { fadeUphover } from "../HOC/animation";
import AnimateOnView from "../HOC/Animation/MotionWrapper";

export default function WorkingProcess() {
  return (
    <section className="w-full    px-4 md:px-12 lg:px-24 bg-navbg text-center text-white lg:h-[700px]  md:h-[900px] ">
      <div className="mb-12 text-start z-[999] pt-10">
        <p className="text-lg mb-2 text-gray-300">Work Flow</p>
        <h2 className="text-5xl font-bold">Our Working Process</h2>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto hover:h-[800px] lg:hover:h-full">
  {workprocess.map((step, index) => (
    <AnimateOnView
      key={index}
     
      once={false}
      whileHover={fadeUphover}
      className="h-full z-50"
    >
      <div className="p-6  transition-colors duration-300 bg-transparent hover:bg-white/10 h-full flex flex-col items-center text-center">
        <h3 className="text-5xl font-extrabold text-cyan mb-6 mt-2">
          {step.number}
        </h3>
        <h4 className="text-xl font-bold mb-3">{step.title}</h4>
        <p className="max-w-xs text-white mx-auto">{step.description}</p>
      </div>
    </AnimateOnView>
  ))}
</div>

    </section>
  );
}
