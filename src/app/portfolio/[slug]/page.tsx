import { portfoliodata } from "@/json/portfolio";
import Image from "next/image";
import { notFound } from "next/navigation";


export default function PortfolioDetail({ params }: { params: { slug: string } }) {
  const { slug } =  params; 

  const allTech = portfoliodata.flatMap((tab) => tab.technologies);
  const project = allTech.find((item) => item.slug === slug);

  if (!project) return notFound();

  return (
    <section className="w-full py-12 flex justify-center">
      <div className="w-full max-w-5xl px-4 flex flex-col items-start text-left">
        {/* Project image */}
        <Image
          src={project.logo}
          alt={project.name}
          width={650}
          height={450}
          className="mb-6 shadow-lg w-full object-contain"
        />

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.techStack.map((stack) => (
            <span
              key={stack}
              className="bg-black text-white text-sm px-2 py-1 "
            >
              {stack}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-black mb-6">{project.description}</p>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-6">Features</h2>
            <ul className="list-disc list-inside space-y-3 text-black text-base">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Download buttons */}
        <div className="mt-8 flex gap-4">
          <Image
            src="/images/portfolio/playstore.png"
            alt="Google Play"
            width={150}
            height={45}
          />
          <Image
            src="/images/portfolio/appstore.png"
            alt="App Store"
            width={150}
            height={45}
          />
        </div>
      </div>
    </section>
  );
}
