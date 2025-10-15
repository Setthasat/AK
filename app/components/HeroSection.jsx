export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900">
        <img 
          src="/AK-hero.png" 
          alt="AK rifle on wooden table background" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">The AK Family</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          The history and impact of the Kalashnikov rifle
        </p>
        <p className="text-sm md:text-base max-w-2xl mx-auto mb-8 text-gray-300">
          An accessible overview of how the AK — both in origin and military design to its global 
          spread and cultural significance — Useful for educational goals, museum exhibits, or 
          anyone seeking clarity online.
        </p>
        <a href="#about" className="bg-yellow-500 text-black px-8 py-4 rounded font-semibold hover:bg-yellow-400 transition">
          Explore the History
        </a>
      </div>
    </section>
  );
};