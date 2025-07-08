// export default async function LifeAtGSoft({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   if (slug !== "life-at-gsoft") {
//     return notFound();
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//         {/* Text Section */}
//         <div>
//           <h2 className="text-sm font-semibold uppercase text-gray-600">Our team</h2>
//           <h1 className="text-4xl md:text-5xl font-bold text-black mt-2">Life At Gsoft</h1>
//           <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-700">
//             Life at GSoft is fast-paced and dynamic, with a strong focus on teamwork and collaboration. 
//             The company culture is built on a foundation of innovation, creativity, and a passion for technology. 
//             The company values work-life balance, and encourages its employees to take time off when needed. 
//             The company also offers a range of benefits, including health insurance, retirement savings plans, 
//             and paid time off. GSoft also places a strong emphasis on its community, and encourages its employees 
//             to get involved in local and charitable events. The company regularly organizes team-building 
//             activities and events, and fosters a strong sense of camaraderie among its employees.
//           </p>
//         </div>

//         {/* Image Gallery */}
//         <div className="grid grid-cols-2 grid-rows-3 gap-4">
//           <div className="col-span-2">
//             <Image
//               src="/images/about/person.png"
//               alt="Team photo 1"
//               width={1200}
//               height={600}
//               className="w-full h-auto rounded-lg object-cover"
//             />
//           </div>
//           <div>
//             <Image
//                src="/images/about/person.png"
//               alt="Team photo 2"
//               width={600}
//               height={400}
//               className="w-full h-auto rounded-lg object-cover"
//             />
//           </div>
//           <div>
//             <Image
//               src="/images/about/person.png"
//               alt="Team photo 3"
//               width={600}
//               height={400}
//               className="w-full h-auto rounded-lg object-cover"
//             />
//           </div>
//           <div className="col-span-2 grid grid-cols-2 gap-4">
//             <Image
//                 src="/images/about/person.png"
//               alt="Team photo 4"
//               width={600}
//               height={400}
//               className="w-full h-auto rounded-lg object-cover"
//             />
//             <Image
//                src="/images/about/person.png"
//               alt="Team photo 5"
//               width={600}
//               height={400}
//               className="w-full h-auto rounded-lg object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }