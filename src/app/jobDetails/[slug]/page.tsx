import JobForm from "@/components/Career/JobForm";
import { jobDetails } from "@/json/jobDetails";
import Link from "next/link";
import { notFound } from "next/navigation";

export default  async function JobDetailPage({ params }: { params:Promise<{ slug: string }>; }) {
    const { slug } =  await params;
  const job = jobDetails[slug];

  if (!job) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12  md:py-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left: Form */}
      <div className="lg:col-span-1 order-last  ">
        <JobForm  />
      </div>

      {/* Right: Job content */}
      <div className="lg:col-span-2">
        <h1 className="text-3xl  md:text-4xl font-bold text-black mb-5">{job.title}</h1>
        <p className="  text-lg mb-4">{job.intro}</p>

        <h2 className="text-xl font-bold text-black mb-8">Skills you should have:</h2>
        <ul className="list-disc list-inside mb-6 space-y-4  text-lg">
          {job.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold text-black mb-8">What will you do?</h2>
        <p className="mb-6 text-lg ">As a “{job.title}”, you will perform the following tasks:</p>
        <ul className="list-disc list-inside space-y-4 text-lg">
          {job.responsibilities.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>





        {slug === "business-development-manager-at-global-software-consulting" && (
  <div className="mt-8">
    <h2 className="text-xl font-bold text-black mb-4">How to apply?</h2>
    <p className="text-lg">
      Interested candidates are required to email their CV at{" "}
      <Link href="hr.gsoftconsulting@gmail.com" className="  text-blue-500 underline">
        hr.gsoftconsulting@gmail.com
      </Link>{" "}
      or{" "}
      <Link href= "hr@gsoftconsulting.com" className="text-blue-500 underline">
        hr@gsoftconsulting.com
      </Link>{" "}
      by mentioning the clear Job Title “Business Development Manager” in the subject line.
    </p>
  </div>
)}

      </div>
    </div>
  );
}
