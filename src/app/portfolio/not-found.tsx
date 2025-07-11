import { subtitleMap, titleMap } from "@/json/bannerdata";
import { blogs } from "@/json/blogdata";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  const path = `/blog/${slug}`;

  if (!blog) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
      {/* Left: Main Blog */}
      <article className="lg:w-2/3 w-full">
        <p className="text-sm text-gray-500 mb-1">{subtitleMap[path]}</p>
        <h1 className="text-4xl font-bold mb-2">{titleMap[path]}</h1>
        <p className="text-md text-gray-400 mb-6">{blog.date}</p>

        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full object-cover"
        />

        {/* Blog Content */}
        <div
          className="prose prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-3">
          {blog.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-600 border"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Social Sharing */}
        <div className="mt-6 flex gap-4 items-center">
          <Link href="#" className="text-cyan-600 hover:text-cyan-800 text-xl">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="#" className="text-cyan-600 hover:text-cyan-800 text-xl">
            <i className="fab fa-whatsapp"></i>
          </Link>
          <Link href="#" className="text-cyan-600 hover:text-cyan-800 text-xl">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="#" className="text-cyan-600 hover:text-cyan-800 text-xl">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
      </article>

      {/* Right Sidebar */}
      <aside className="hidden lg:block lg:col-span-1 bg-white p-2 px-7 rounded-lg shadow space-y-6 max-h-[500px] overflow-auto no-scrollbar">
        <h4 className="font-bold text-md mb-3">Most Popular</h4>

        {/* Search */}
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

        {/* Blog Titles */}
        <div>
          <ul className="text-sm text-black space-y-4">
            {blogs.slice(0, 10).map((item) => (
              <li key={item.slug} className="pb-1">
                <div className="font-bold text-md">{item.title}</div>
                <div className="text-gray-500 text-sm">{item.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
