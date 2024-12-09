import Image from 'next/image';

export default function Home() {
  const categories = [
    { title: "Casual", image: "/images/casual.jpg" },
    { title: "Formal", image: "/images/formal.jpg" },
    { title: "Party", image: "/images/party.jpg" },
    { title: "Gym", image: "/images/gym.jpg" },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-200 to-white min-h-screen flex flex-col items-center">
      <h1 className="text-center text-2xl font-bold mt-6 mb-8">
        Browse by Dress Style
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4">
        {categories.map((category) => (
          <div key={category.title} className="relative group overflow-hidden rounded-lg">
           <Image
              src={category.image}
              alt={category.title}
              width={500}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />

              
            <div className="absolute inse bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-lg font-semibold">
                {category.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


