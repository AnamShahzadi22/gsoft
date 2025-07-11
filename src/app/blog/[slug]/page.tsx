import { blogs, sociallinks } from "@/json/blogdata";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
      {/* Main Blog Content */}
      <article className="lg:w-2/3 w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full object-cover"
        />
        <p className="text-sm text-gray-600 mb-1">{blog.excerpt}</p>
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <div className="prose prose-lg max-w-none text-gray-800">
          {blog.content}
        </div>

        <h1 className="text-2xl font-semibold mb-10">{blog.title}</h1>
        <div className="prose prose-lg max-w-none text-gray-800">
          {blog.content}
        </div>

        <div className="mt-12">
          {/* Top Row: Tags label, first 2 tags, and social links */}
          <div className="flex flex-wrap items-center  gap-2 text-center">
            <h3 className="text-sm font-semibold">Tags:</h3>

            {/* First 1-2 tags inline */}
            {blog.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-transparent text-sm px-4 py-2 rounded-full text-black border border-gray-200"
              >
                {tag}
              </span>
            ))}

            {/* Social Links */}
            <div className=" hidden md:flex space-x-3   pl-15">
              {sociallinks.map(({ icon, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  target="_blank"
                  className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-white"
                >
                  {React.cloneElement(icon, { size: 20 })}
                </Link>
              ))}
            </div>
          </div>

          {/* Remaining tags below */}
          {blog.tags?.length > 2 && (
            <div className="mt-4 flex flex-wrap  gap-3">
              {blog.tags.slice(2).map((tag) => (
                <span
                  key={tag}
                  className="bg-transparent text-sm px-4 py-2 rounded-full text-black border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Right: Search + Popular */}
      <aside className="hidden lg:block lg:col-span-1 bg-white p-2 px-7  rounded-lg shadow space-y-6 max-h-[700px] overflow-auto no-scrollbar">
        <h4 className="font-bold text-md mb-3">Most Popular</h4>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search the blog"
            className="h-10 w-full px-4 pr-10 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 shadow-none bg-white"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <SearchIcon size={18} />
          </div>
        </div>

        {/* Blog List */}
        <div>
          <ul className="text-sm text-black space-y-4">
            {blogs.slice(0, 10).map((item, idx) => (
              <li key={idx} className="pb-1">
                <div className="font-bold text-lg ">{item.title}</div>
                <div className="text-lg">{item.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
