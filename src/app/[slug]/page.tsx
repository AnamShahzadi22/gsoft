// import { notFound } from "next/navigation";
// import Image from "next/image";

import EstimateForm from "@/components/EstimateProject/EstimiateForm";





export default  async function EstimatePage({params}: {
  params: Promise<{ slug: string }>;
}) {
const { slug } = await params;


  return <EstimateForm    slug={slug}/>;
}
