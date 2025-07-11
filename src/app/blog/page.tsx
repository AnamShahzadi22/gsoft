"use client";

import { useState } from "react";
import BlogCard from "@/components/Blog/BlogCard";
import { blogs } from "@/json/blogdata";
import { Pagination } from "@heroui/react";
import { SearchIcon } from "lucide-react";

export default function BlogListPage() {
  const perPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const filteredBlogs =  blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );


  const total = filteredBlogs.length;
  const totalPages = Math.ceil(total / perPage);

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Left: Article Info */}
      <aside className="hidden lg:block lg:col-span-1 bg-white p-2 px-7 rounded-lg shadow  max-h-[490px] overflow-auto">
        <h3 className="text-xl font-bold mb-6">Articles</h3>
        <p className="text-lg   ">
          Mute on the boring weblogs. Here is something fresh in the articles billet! We uncover what you want to read. Whether you are a marketer exploring the marketing guides or a non-specialist with an online business looking for some insights and tips, we have something for everyone.
        </p>
      </aside>

      {/* Middle: Blog Cards */}
      <main className=" col-span-4 lg:col-span-2 space-y-6">
        {paginatedBlogs.length > 0 ? (
          paginatedBlogs.map((blog,idx) => <BlogCard key={idx} {...blog} />)
        ) : (
          <p className="text-gray-600 text-center">No results found.</p>
        )}

        <div className="pt-8 flex justify-center items-center">
          <Pagination
            total={totalPages}
            initialPage={currentPage}
            onChange={handlePageChange}
            loop
            showControls
            color="default"

          />
        </div>
      </main>

      {/* Right: Search + Popular */}
     <aside className="hidden lg:block lg:col-span-1 bg-white p-2 px-7  rounded-lg shadow space-y-6 max-h-[500px] overflow-auto no-scrollbar">
  <h4 className="font-bold text-md mb-3">Most Popular</h4>

  {/* Search Input */}
  <div className="relative">
    <input
      type="text"
      value={search}
      placeholder="Search the blog"
      onChange={(e) => setSearch(e.target.value)}
      className="h-10 w-full px-4 pr-10 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 shadow-none bg-white"
    />
    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
      <SearchIcon size={18} />
    </div>
  </div>

  {/* Blog List */}
  <div>
    <ul className="text-sm text-black space-y-4">
      {blogs.slice(0, 5).map((item,idx) => (
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
