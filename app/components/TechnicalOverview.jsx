import { Settings, Target, Ruler, Package, Flame, Star } from "lucide-react";

export const TechnicalOverview = () => {
  const specs = [
    {
      icon: <Settings className="text-yellow-500" size={32} />,
      title: "Action",
      description: "Gas-operated, rotating bolt",
    },
    {
      icon: <Target className="text-yellow-500" size={32} />,
      title: "Effective Range",
      description: "Roughly 300-400 meters (varies by model and sighting)",
    },
    {
      icon: <Ruler className="text-yellow-500" size={32} />,
      title: "Calibers (common)",
      description: "7.62×39mm, 5.45×39mm, 5.56×45mm (in later derivatives)",
    },
    {
      icon: <Package className="text-yellow-500" size={32} />,
      title: "Magazine Capacity",
      description: "Typically 30 rounds (various sizes in practice)",
    },
    {
      icon: <Flame className="text-yellow-500" size={32} />,
      title: "Rate of Fire",
      description: "Approximately 600 rounds per minute (cyclic, full auto)",
    },
    {
      icon: <Star className="text-yellow-500" size={32} />,
      title: "Design Priorities",
      description:
        "Reliability, simplicity, ease of manufacture and maintenance",
    },
  ];

  return (
    <section id="technical" className="py-16 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Technical Overview
        </h2>
        <p className="text-center text-gray-400 mb-12">
          [Representative Specs]
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="mb-3">{spec.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-yellow-500">
                {spec.title}
              </h3>
              <p className="text-gray-300 text-sm">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
