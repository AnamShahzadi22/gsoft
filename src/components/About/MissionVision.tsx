
import Image from "next/image";

const MissionVision = () => {
  return (
    <section className="bg-navbg text-white py-16  px-5 lg:px-35  ">
      <div className=" flex flex-col md:flex-row items-start justify-between gap-12">
        
        {/* Mission */}
        <div className="flex-1">
          <div className="mb-6">
            <Image 
              src="/images/about/mission.png" 
              alt="Mission Icon" 
              width={80} 
              height={80} 
            />
          </div>
          <p className="font-semibold mb-2">Work with the Tech Leader.</p>
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p  className="justify-end">
            GSoft strives to provide Quality Services of Web Development,
            Mobile App Development, Custom Software Development, DevOps, QA
            Testing and UI/UX Designing to startup businesses to grow in this
            era of digitalization by updating and modernizing their business
            operations through AI, Machine Learning, and IOT with the help of
            skilled, qualified and trained Resources. We aim to grow by
            Networking and believe that “Resources are the keys to the success
            of a company and Skill is the core value of a Resource”. Though,
            we intend to empower our employees with rewards, achievements and
            challenging opportunities for learning.
          </p>
        </div>

        {/* Vision */}
        <div className="flex-1">
          <div className="mb-6">
            <Image 
              src="/images/about/vision.png" 
              alt="Vision Icon" 
              width={80} 
              height={80} 
            />
          </div>
          <p className="font-semibold mb-2">What We Aspire To Be</p>
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p>
            To be leader of IT industry by providing reliable and best IT
            solutions around the globe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
