"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { toast } from "react-toastify";
import { notFound } from "next/navigation";


const schema = z.object({
  name: z.string().min(1, "This field is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "This field is required"),
  company: z.string().min(1, "This field is required"),
  projectType: z.string().min(1, "This field is required"),
  priority: z.string().min(1, "This field is required"),
  status: z.string().min(1, "This field is required"),
  region: z.string().min(1, "This field is required"),
  description: z.string().min(1, "This field is required"),
});

type FormData = z.infer<typeof schema>;

export default function EstimateForm({ slug }: { slug: string }) {



 
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) setFileError("");
  };


    if (slug !== "estimate-your-project") {
      return notFound();
    }


  const onSubmit = (data: FormData) => {
    if (!file) {
      setFileError("Please upload a file");
      return;
    }
    console.log({ ...data, file });
     toast.success("Your details has been submitted!");
    reset();
    setFile(null);
    setFileError("");
  };




 

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4 py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl bg-white p-10 space-y-3"
      >
        <h1 className="text-4xl font-bold text-center text-cyan">
          Estimation Your Project
        </h1>
        <p className="text-center text-lg font-medium">
          Fill in the Below Form to Receive a Detailed Estimation
        </p>
        <p className="text-center text-gray-400">
          {`You're just one step away to get a quick and detailed estimate from our team`}
        </p>

        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              {...register("name")}
              placeholder="Name*"
              className="input"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="Email Address*"
              className="input"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
        </div>

        {/* Phone & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="number"
              {...register("phone")}
              placeholder="Phone Number*"
              className="input"
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>
          <div>
            <input
              type="text"
              {...register("company")}
              placeholder="Company Name*"
              className="input"
            />
            {errors.company && <p className="error">{errors.company.message}</p>}
          </div>
        </div>

        {/* Selects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full">
            <select
              {...register("projectType")}
              defaultValue=""
              className="input appearance-none pr-12 text-sm"
            >
              <option value="" disabled hidden>Project Type*</option>
              <option>Web</option>
              <option>Mobile</option>
              <option>Desktop</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
            {errors.projectType && <p className="error">{errors.projectType.message}</p>}
          </div>

          <div className="relative w-full">
            <select
              {...register("priority")}
              defaultValue=""
              className="input appearance-none pr-12  text-sm"
            >
              <option value="" hidden disabled>Priority*</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
            {errors.priority && <p className="error">{errors.priority.message}</p>}
          </div>
        </div>

        {/* Status & Region */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full">
            <select
              {...register("status")}
              defaultValue=""
              className="input appearance-none pr-12  text-sm"
            >
              <option value="" disabled hidden>Project Status*</option>
              <option>Idea</option>
              <option>Prototype</option>
              <option>In Progress</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
            {errors.status && <p className="error">{errors.status.message}</p>}
          </div>

          <div className="relative w-full">
            <select
              {...register("region")}
              defaultValue=""
              className="input appearance-none pr-12  text-sm"
            >
              <option value="" disabled hidden>Select your Region*</option>
              <option>USA</option>
              <option>Europe</option>
              <option>Asia</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
            {errors.region && <p className="error">{errors.region.message}</p>}
          </div>
        </div>

        {/* File Upload */}
        <div>
          <input
            type="file"
            onChange={onFileChange}
            className="w-full border border-gray-300 text-base p-3 rounded focus:outline-none focus:ring-1 file:mr-4 file:py-1 file:px-2 file:rounded file:border-1 file:text-xs file:font-semibold file:bg-gray-50  hover:file:bg-gray-200"
          />
          {fileError && <p className="error">{fileError}</p>}
        </div>

        {/* Description */}
        <div>
          <textarea
            {...register("description")}
            placeholder="Short Description"
            className="input h-32 text-base p-3 resize-none"
          />
          {errors.description && <p className="error">{errors.description.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={clsx(
            "w-full py-2 rounded font-bold transition text-white text-lg",
            isValid  ? "bg-cyan hover:bg-cyan-500" : "bg-gray-200"
          )}
          disabled={!isValid }
        >
          Get Estimate
        </button>
      </form>
    </div>
  );
}
