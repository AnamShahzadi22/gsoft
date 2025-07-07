
import ServiceDetails from "@/components/Services/ServiceDetails";

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServiceDetails slug={slug} />;
}
