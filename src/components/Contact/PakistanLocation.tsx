"use client";
import Image from "next/image";

type LocationItem = {
  id: string;
  label: string;
  city: string;
  address: string;
  phone: string;
  image: string;
  mapEmbedUrl: string;
};

export default function PakistanLocationContent({
  location,
}: {
  location: LocationItem;
}) {
  if (location.id !== "pakistan") return null;

  return (
    <div className="flex flex-row  items-stretch justify-center gap-4  px-5 md:px-0 bg-white">
      {/* Image Section */}
      <div className="w-full sm:w-1/2 h-[300px] sm:h-[400px]">
        <div className="w-full h-full overflow-hidden">
          <Image
            src={location.image}
            alt={location.city}
            width={800}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full sm:w-1/2 h-[300px] sm:h-[400px]">
        <div className="w-full h-full  overflow-hidden">
          <iframe
            src={location.mapEmbedUrl}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
