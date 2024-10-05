import React from "react";

const Hero = () => {
  return (
    <>
      {/* Background Image Section */}
      <section
        className="bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
       
      </section>

      {/* Details Section Below the Background Image */}
      <section className="py-10">
      <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-black">Raising The Game For Clean Sport</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
          {Array(4).fill(0).map((_, index) => (
            <div key={index} className="bg-white text-black p-4 rounded shadow-md">
              <p className="text-gray-600 mb-2">28 SEP 2024</p>
              <h3 className="font-bold mb-2">Indian Boxer Fails Doping Test, Disqualified From Olympic Qualifiers</h3>
              <a href="#read-more" className="text-blue-600 hover:underline">Read More &rarr;</a>
            </div>
          ))}
        </div>

        {/* Dots for Pagination or Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          <span className="w-3 h-3 bg-black rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </section>
    </>
  );
};

export default Hero;
