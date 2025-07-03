"use client";

import { Button } from "@heroui/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef } from "react";
import { serviceSections } from "@/json/navbar";

const ServicesDropdown = () => {
  const [open, setOpen] = useState(false); // desktop
  const [isMobileOpen, setIsMobileOpen] = useState(false); // mobile
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150); // slight delay
  };

  return (
    <>
      {/* Desktop Dropdown */}
      <div
        className="hidden lg:block relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMouseLeave}
      >
        <Button
          disableRipple
          variant="flat"
          className="text-white bg-transparent hover:bg-white/4 p-2 text-lg"
          endContent={
            open ? (
              <ChevronUp size={18} className="transition-transform" />
            ) : (
              <ChevronDown size={18} className="transition-transform" />
            )
          }
        >
          Services
        </Button>

        {open && (
          <div className="absolute  -translate-x-1/6 mt-7 w-[80vw] max-w-5xl  bg-white  rounded-xl shadow-xl grid grid-cols-4 gap-7">
            {serviceSections.map((section, index) => (
              <div
                key={section.title}
                className={`${index === serviceSections.length - 1 ? "bg-cyan-50 p-6 rounded-lg " : "bg-white p-6 rounded-lg"}`}
              >
                <h4 className="font-semibold text-gray-700 mb-2">
                  {section.title}
                </h4>
                <ul className="space-y-6">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-600 hover:text-cyan-600 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Dropdown */}
      <div className="lg:hidden">
        <div
          className="flex justify-between items-center py-2 cursor-pointer"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <span className="text-white">Services</span>
          {isMobileOpen ? (
            <ChevronUp size={18} className="text-white" />
          ) : (
            <ChevronDown size={18} className="text-white" />
          )}
        </div>

        {isMobileOpen && (
          <div className="bg-navbg p-4 space-y-5">
            {serviceSections.flatMap((section) =>
              section.items.map((item) => (
                <div
                  key={item}
                  className="text-white hover:text-cyan cursor-pointer"
                >
                  {item}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ServicesDropdown;
