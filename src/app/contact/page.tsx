"use client";

import ContactTopBanner from "@/components/Contact/ContactTopBanner";
import React, { useState } from "react";
import ContactForm from "../../components/Contact/ContactForm";
import { locations } from "@/json/locationdata";
import PakistanLocationContent from "../../components/Contact/PakistanLocation";




export default function ContactPage() {
  const [selected, setSelected] = useState(locations[1]); 

  return (
    <div>
      <ContactTopBanner
        locations={locations}
        selectedId={selected.id}
        onChange={(id) => {
          const loc = locations.find((l) => l.id === id);
          if (loc) setSelected(loc);
        }}
      />
      <PakistanLocationContent location={selected} />
      <ContactForm />
    </div>
  );
}
