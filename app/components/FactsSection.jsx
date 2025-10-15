import { Flame, Lightbulb, AlertCircle } from "lucide-react";

export const FactsSection = () => {
  const facts = [
    {
      icon: <Lightbulb className="text-yellow-500" size={32} />,
      text: 'The name "AK" stands for "Avtomat Kalashnikova" (Kalashnikov\'s Automatic).',
    },
    {
      icon: <AlertCircle className="text-yellow-500" size={32} />,
      text: "Early AK production used milled receivers; stamped-steel receivers lowered cost and sped production.",
    },
    {
      icon: <Flame className="text-yellow-500" size={32} />,
      text: "Many countries produced licensed or unlicensed versions, contributing to huge global stockpiles of variants.",
    },
    {
      icon: <Lightbulb className="text-yellow-500" size={32} />,
      text: "The Kalashnikov design is notable for a small number of moving parts and ease of field stripping.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-500">
          Facts and Clarifications
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0">{fact.icon}</div>
              <p className="text-gray-700">{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
