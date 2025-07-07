import ServiceDetails from "@/components/Services/ServiceDetails";

export default function ServiceDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  return <ServiceDetails slug={params.slug} />;
}
