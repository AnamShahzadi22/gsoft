import EstimateForm from "@/components/EstimateProject/EstimiateForm";
import LifeAtGSoft from "@/components/LifeGSoft/LifeAtGSoft";
import { notFound } from "next/navigation";

export default async function Page({ params }: {   params: Promise<{ slug: string }>; }) {
  const { slug } =  await params;

  if (slug === "estimate-your-project") {
    return <EstimateForm  />;
  }

  if (slug === "life-at-gsoft") {
    return <LifeAtGSoft/>;
  }

  return notFound();
}
