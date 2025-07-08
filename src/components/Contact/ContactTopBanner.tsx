"use client";

import { Tabs, Tab } from "@heroui/react";

type LocationItem = {
  id: string;
  label: string;
  title?: string;
  subtitle?: string;
  phone?: string;
};

type Props = {
  locations: LocationItem[];
  selectedId: string;
  onChange: (id: string) => void;
};

export default function ContactTopBanner({
  locations,
  selectedId,
  onChange,
}: Props) {
  const selectedLocation = locations.find((loc) => loc.id === selectedId);
  const isPakistan = selectedId === "pakistan";

  return (
    <header
      className={`relative text-white w-full ${
        isPakistan ? "h-[400px]" : "h-[600px]"
      } bg-navbg flex flex-col  items-center text-center px-4 pt-20`}
    >

       <Tabs
  selectedKey={selectedId}
  onSelectionChange={(key) => onChange(key as string)}
  variant="underlined"
  
  aria-label="Location Tabs"
  classNames={{
    base: "text-white",
    tab: "text-sm font-medium text-white pb-2 data-[selected=true]:border-b-2 data-[selected=true]:border-white ",
    tabList: "flex gap-6 lg:gap-10 ",
    tabContent: "  px- lg:px-12 text-whit group-data-[selected=true]:text-white   ",
    cursor: "hidden",
    panel: "text-white" 
    
  }}
>
  {locations.map((loc) => (
    <Tab   key={loc.id} title={loc.label} /> 
  ))}
</Tabs>
   {/* <Tabs
  selectedKey={selectedId}
  onSelectionChange={(key) => onChange(key as string)}
  variant="underlined"
  aria-label="Location Tabs"
  classNames={{
    base: "text-white",
    tab: "text-lg font-medium text-white hover:text-white",

  }}
>
  {locations.map((loc) => (
    <Tab key={loc.id} title={loc.label} />
  ))}
</Tabs> */}



      <div className="z-20 mt-8">
        <h1
          className={`${
            isPakistan
              ? "font-normal text-2xl md:text-3xl"
              : "font-bold text-5xl mt-30"
          }`}
        >
          {selectedLocation?.title}
        </h1>

        {selectedLocation?.subtitle && (
          <p className="mt-4 text-lg md:text-xl font-normal">
            {selectedLocation.subtitle}
          </p>
        )}

        {selectedLocation?.phone && (
          <p className="mt-4 text-sm text-white">{selectedLocation.phone}</p>
        )}
      </div>
    </header>
  );
}
