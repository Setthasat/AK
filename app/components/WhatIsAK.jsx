export const WhatIsAK = () => {
  return (
    <section id="about" className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="h-full p-8">
            <h2 className="text-5xl font-bold mb-16 text-yellow-500">
              What is the AK?
            </h2>
            <p className="text-gray-700 mb-8">
              The AK refers to a family of gas-operated, selective-fire rifles
              originally developed in the Soviet Union by Mikhail Kalashnikov.
              Known for reliability, simplicity, and mass production, the AK has
              become one of the most widely used small arms in modern history.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-12">
              <p className="text-sm text-gray-800">
                The AK's design prioritized robustness and ease of maintenance
                over precision—traits that help explain its both state and
                non-state armed forces.
              </p>
            </div>
          </div>
          <div className=" p-8 rounded-lg">
            <img
              src="/AK.jpeg"
              alt="Technical diagram of AK-47 rifle"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
