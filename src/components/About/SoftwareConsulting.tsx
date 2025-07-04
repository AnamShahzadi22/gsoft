
import Image from "next/image";
import AnimateOnView from "../HOC/Animation/MotionWrapper";
import { fadeLeft } from "../HOC/animation";

const SoftwareConsulting = () => {
  return (

 <AnimateOnView variants={fadeLeft}>
    <section className="flex flex-row items-center justify-between gap-8 px-6 py-12 max-w-6xl mx-auto">
      {/* Text Content */}


      <div className="flex-1">
        <p className="text-black mb-2">Work with the Tech Leader.</p>
        <h1 className="text-4xl sm:text-5xl  mb-6 text-black">
          Software Development <br /> Company | Global <br /> Software Consulting
        </h1>
        <p className="text-[#555555] leading-relaxed ">
          Welcome to GSoft! A Leading software development company who is
          providing modern software solutions and specialized services of
          Front-End, Back-End and Mobile-App Development along with Open AI
          and many more. We bring revolution and digital transformation to
          the journey of your success by excelling various industries and
          businesses. By staying consistent with cutting-edge technologies
          and methodologies with a team of 100+ skilled experts, we strive
          to innovate your growing business model to boost its success and
          assure 24/7 availability for timely and 100% satisfying customer
          support. So, be our Partner for highly accountable and reliable
          Results...
        </p>
      </div>

      {/* Image */}
      <div className="  hidden  md:block flex-1 max-w-md w-full ">
        <div className="relative w-full h-96  overflow-hidden ">
          <Image
            src="/images/about/person.png" 
            alt="Software Consulting"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
    </AnimateOnView>
  );
};

export default SoftwareConsulting;
