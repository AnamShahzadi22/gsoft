

import { companyLinks,

    services1,
  services2,
  technologies,
  socials,
 } from "@/json/footer";
import Link from "next/link";
import ScrolltoTop from "./ScrolltoTop";
import React from "react";


const Footer = () => {
  return (
    <footer className="bg-navbg text-white pt-12">
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {/* COMPANY */}
        <div>
          <h3 className="text-xl font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2">
            {companyLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-cyan block cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES 1 */}
        <div>
          <h3 className="text-xl font-bold mb-4">SERVICES</h3>
          <ul className="space-y-2">
            {services1.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-cyan block cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES 2 */}
        <div>
          <h3 className="text-xl font-bold mb-4">SERVICES</h3>
          <ul className="space-y-2">
            {services2.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-cyan block cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* TECHNOLOGIES */}
        <div>
          <h3 className="text-xl font-bold mb-4">TECHNOLOGIES</h3>
          <div className="flex flex-wrap gap-3 gap-y-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="border border-white hover:border-cyan hover:text-cyan text-sm px-3 py-1   cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="border-t  mx-25 border-cyan mt-10 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex space-x-4">
            {socials.map(({ icon, href }, idx) => (
              <Link
                key={idx}
                href={href}
                target="_blank"
               
                className="w-12 h-12 bg-cyan rounded-full flex items-center justify-center text-black"
              >
                {React.cloneElement(icon, { size: 22 })} 
              </Link>
            ))}
          </div>

          
          <div className="text-sm text-center text-white/80">
             <ScrolltoTop/>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-cyan text-black text-sm py-4">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
    
    {/* Policies + Copyright */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-12 text-center">
      <Link href="#" className="flex items-center gap-2 ">
        <span className="text-2xl leading-none">&bull;</span> Privacy Policy
      </Link>
      <Link href="#" className="flex items-center gap-2">
        <span className="text-2xl leading-none">&bull;</span> Terms & Conditions
      </Link>
      <span className="text-center">© All rights reserved 2023 GSC</span>
    </div>

    {/* Email */}
    <div className="text-center">info@gsoftconsulting.com</div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
