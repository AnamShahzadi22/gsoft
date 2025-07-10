"use client";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import JobFilters from "./JobFilter";
import { CircularProgress } from "@heroui/react";

const jobs = [
  { title: "Back-End (Node.js) Developer", location: "On-site (Lahore)", experience: "2 Years", slug: "node-dev", category: "development" },
  { title: "Front-End (React.js) Developer", location: "On-site (Lahore)", experience: "1 Years", slug: "react-dev", category: "development" },
  { title: "Machine Learning / AI Developer", location: "On-site (Lahore)", experience: "2 Years", slug: "ml-dev", category: "development" },
  { title: "Business Management", location: "On-site (Lahore)", experience: "6 Months", slug: "ma", category: "management" },
];

export default function JobList() {
  const [query, setQuery] = useState("");
  const [experience, setExperience] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesQuery = query ? job.title.toLowerCase().includes(query.toLowerCase()) : true;
    const matchesExperience = experience ? job.experience === experience : true;
    const matchesCategory = category ? job.category === category : true;
    return matchesQuery && matchesExperience && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <JobFilters
        onSearch={setQuery}
        onExperienceChange={setExperience}
        onCategoryChange={setCategory}
      />

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <CircularProgress aria-label="Loading..." className="text-cyan" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mt-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, idx) => (
              <JobCard key={idx} {...job} />
            ))
          ) : (
            <p className="text-center col-span-full text-black mt-4 text-2xl font-bold py-12">
              No jobs found matching your criteria.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
