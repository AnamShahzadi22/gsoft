"use client";

import { Tooltip, Button } from "@heroui/react";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function WhatsAppFloating() {
  const [hovered, setHovered] = useState(false);
  const [showFullLink, setShowFullLink] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure this only runs on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const phoneNumber = "+9242322159428";
  const message =
    "I came across your website and was wondering Can we chat now?";
  const link = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (hovered) {
      timer = setTimeout(() => {
        setShowFullLink(true);
      }, 2000);
    } else {
      setShowFullLink(false);
    }
    return () => clearTimeout(timer);
  }, [hovered]);

  const displayLink = showFullLink
    ? link
    : link.slice(0, Math.ceil(link.length / 2)) + "...";

  if (!isClient) return null; // SSR-safe return

  return (
    <>
      {hovered && (
        <div className="fixed bottom-0 left-0 w-full bg-pink-100 rounded text-black text-xs px-4 py-2 shadow z-40 text-left font-medium transition-all duration-300 inline-block max-w-fit">
          {displayLink}
        </div>
      )}

      <div
        className="fixed bottom-6 right-6 z-50 flex flex-col items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Tooltip
          content="Whatsapp us"
          placement="top"
          color="foreground"
          className="text-sm"
        >
          <Button
            isIconOnly
            onClick={() => window.open(link, "_blank")}
            className="bg-[#25D366] text-white rounded-full p-2.5 h-16 w-16 shadow-lg hover:scale-110 transition-transform"
          >
            <FaWhatsapp size={70} color="white" />
          </Button>
        </Tooltip>
      </div>
    </>
  );
}
