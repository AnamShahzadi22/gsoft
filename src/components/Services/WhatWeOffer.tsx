import { fadeLeft } from "../HOC/animation";
import AnimateOnView from "../HOC/Animation/MotionWrapper";

export default function WhatWeOffer() {
  return (
    <section className="w-full py-18 px-4 sm:px-6 md:px-1 bg-white text-center">
      <AnimateOnView variants={fadeLeft}
              once={false}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-black mb-3">
          What We Offer
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-800">
          Gsoft offers you tailor-made software development services to fit any size of business.
          Whether you are a startup, medium-sized business, or large enterprise, Gsoft has the perfect
          solutions to fulfil your project requirements. Our professional team of developers will work
          with you every step of the way to create a perfectly fitted IT strategy to meet your business needs.
          Our comprehensive technology roadmaps will help you navigate all of the technical challenges
          quickly and efficiently.
        </p>
      </div>
      </AnimateOnView>
    </section>
  );
}