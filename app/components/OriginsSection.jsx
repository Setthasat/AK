import { Wrench, Settings, Hammer, Globe } from 'lucide-react';

export const OriginsSection = () => {
  const timelineItems = [
    {
      icon: <Wrench className="text-white" size={24} />,
      title: 'Design and Early Work (1940s)',
      description: 'Mikhail Kalashnikov began designs at the end of World War II, influenced by combat experience and existing automatic rifle concepts. His creation had simplified production techniques that could be produced at scale and operated in harsh conditions.'
    },
    {
      icon: <Settings className="text-white" size={24} />,
      title: 'AK-47 and Adoption (1947–1950s)',
      description: 'The finalized in 1947 and formally adopted by the Soviet Armed Forces in the early 1950s. Early production models used milled receivers, later models used the stamped-steel receiver for faster, more cost-effective production.'
    },
    {
      icon: <Hammer className="text-white" size={24} />,
      title: 'Modernization and Variants (1950s–1970s)',
      description: 'Several variants emerged to meet changing requirements—the lighter, stamped-receiver AKM (introduced 1959–1963), and later designs such as the AK-74 (mostly introduced in the 1970s).'
    },
    {
      icon: <Globe className="text-white" size={24} />,
      title: 'Global Production and Distribution',
      description: 'The AK\'s simple design made it easy to license and produce under many manufacturing regimes worldwide. Over time it became common in national armies, insurgent groups, and paramilitary forces across multiple continents.'
    }
  ];

  return (
    <section id="history" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-500">Origins and Development</h2>
        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <div key={index} className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-yellow-500">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};