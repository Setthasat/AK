export const VariantsSection = () => {
  const variants = [
    {
      name: "AK-47",
      description:
        "Original classic: rugged, chambered in 7.62×39mm with milled or later stamped-steel receivers.",
      image: "/AK-1947.png",
      year: "1947",
    },
    {
      name: "AKM",
      description:
        "Lighter and later: automatic/semi-automatic version of the AK-47 with a stamped receiver, remains widely used amongst forces in conflict zones.",
      image: "/AK-1959.png",
      year: "1959",
    },
    {
      name: "AK-74",
      description:
        "Smaller caliber: fires the smaller 5.45×39mm cartridge resulting in reduced recoil and is still commonplace in arsenals like the former USSR.",
      image: "/AK-1974.png",
      year: "1974",
    },
    {
      name: "AK-100 Series",
      description:
        "Modern versions: built-upon adjustable stocks and handguards, chambered in multiple calibers, includes models in various calibers.",
      image: "/AK-1990s.png",
      year: "1990s",
    },
  ];

  return (
    <section id="variants" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-500">
          Notable Variants and Derivatives
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {variants.map((variant, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={variant.image}
                alt={`${variant.name} rifle`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center w-full mb-4">
                  <h3 className=" font-bold text-lg  text-yellow-500">
                    {variant.name} 
                  </h3>
                  <p className="text-yellow-500 bg-yellow-200 px-4 py-1 rounded-full">{variant.year}</p>
                </div>

                <p className="text-gray-700 text-sm">{variant.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
