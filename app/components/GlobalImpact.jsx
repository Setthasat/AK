export const GlobalImpact = () => {
  return (
    <section id="impact" className="py-14 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="p-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-yellow-500">
              Global Impact and Cultural Significance
            </h2>
            <p className="text-gray-700 mb-2">
              The AK is both a practical weapon and a cultural symbol. Its
              ubiquitous appears on flags, in logos, and political iconography
              in multiple countries.
            </p>
            <p className="text-gray-700 mb-2">
              Because of its widespread manufacture and distribution, the AK has
              featured in countless conflicts, revolutions, peacekeeping
              practices, and the dynamics of armed conflicts since the mid-20th
              century.
            </p>
            <p className="text-gray-700 mb-2">
              The rifle's association with a wide range of actors — national
              militaries, insurgent movements, and paramilitary groups — has
              made it a frequent subject of study in geopolitics and security
              studies.
            </p>
          </div>
          <div className="p-6">
            <img
              src="/AK-Global.png"
              alt="World map showing AK distribution"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
