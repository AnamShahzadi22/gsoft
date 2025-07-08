"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";

const formSchema = z.object({
  name: z.string().min(2, "This field is required"),
  email: z.string().email("This field is required"),
  phone: z.string().min(7, "This field is required"),
  message: z.string().min(1, "This field is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    
    console.log("submitted", data);

      toast.success("Your details has been submitted!");
       reset();
  };

  return (
    <div className="max-w-2xl mx-auto my-20 text-center px-4">
      <h2 className="text-2xl font-bold mb-2">{`Let's start a project together`}</h2>
      <p className="text-lg mb-8 ">
       We make all your dreams come true in a successful project.

      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
        <div>
          <input
            {...register("name")}
            placeholder="Name"
            className="input w-full"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              {...register("email")}
              placeholder="Email"
              className="input w-full"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="flex-1">
            <input
            type="number"
              {...register("phone")}
              placeholder="Phone"
              className="input w-full"
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <textarea
            {...register("message")}
            placeholder="Message"
            rows={5}
            className="input w-full resize-none"
          />
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-3 rounded transition-colors ${
            isValid ? "bg-cyan hover:bg-cyan-500 text-white " : "bg-gray-300 text-black"
          }`}
        >
         Submit
        </button>
      </form>
    </div>
  );
}
