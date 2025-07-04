'use client';

import { Card, CardBody, Image } from '@heroui/react';

const clients = [
  {
    name: 'Houze Pk',
    logo: '/blend.png',
  },
  {
    name: 'Maroon Studios',
    logo: '/blend.png',
  },
  {
    name: 'Omid Life',
    logo: '/blend.png',
  },
  {
    name: 'Vival Tech',
    logo: '/blend.png',
  },
  {
    name: 'Blend Menu',
    logo: '/blend.png',
  },
];

export default function ClientsGrid() {
  return (
    <section className="bg-navbg py-16 px-4 md:px-20">
 
      <h2 className="px-4 md:px-20 text-4xl font-bold text-white text-left my-12">
        Meet Our Clients
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  px-4 md:px-20 pb-16">
        {clients.map((client, index) => (
          <Card
            key={index}
            className={`
              max-w-sm w-full border rounded border-white bg-transparent p-0 lg:p-4
              ${index === 3 ? 'lg:col-start-1' : ''}
              ${index === 4 ? 'lg:col-start-3' : ''}
              mx-auto
            `}
          >
            <CardBody className="flex flex-row items-center gap-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center">
                <Image
                  alt={client.name}
                  src={client.logo}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold lg:text-lg">{client.name}</span>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}