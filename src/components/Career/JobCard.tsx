"use client";
import { Card, CardHeader, CardBody, CardFooter, Link } from "@heroui/react";
import { Clock } from "lucide-react";
import { IoArrowForward } from "react-icons/io5";

type JobCardProps = {
  title: string;
  location: string;
  experience: string;
  slug: string;
};

export default function JobCard({ title, location, experience, slug }: JobCardProps) {
  return (
    <Card className="w-full max-w-[400px] mx-auto rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-black mb-1">{location}</p>
          <p className="text-black">Experience {experience}</p>
        </div>
      </CardHeader>
     
      <CardBody className="flex flex-row justify-between  ">
       


         <Link
          href={`/careers/${slug}`}
          className=" font-semibold text-black "
        >
          Apply Now <IoArrowForward className=" ml-2 text-cyan text-xl font-bold"/>
        </Link>



         <p className="flex items-center text-gray-500 text-sm">
          <Clock className="w-4 h-4 mr-1" /> 30 days left
        </p>
      </CardBody>
      <CardFooter> </CardFooter>
    
      
    </Card>
  );
}
