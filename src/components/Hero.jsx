import React from "react";

const Hero = () => {
  return (
    <>
      {/* Background Image Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white z-10 text-center animate-fade-in">
            Raising The Game For Clean Sport
          </h1>
        </div>
      </section>

      {/* Details Section Below the Background Image */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <p className="text-gray-400 mb-2 text-sm">28 SEP 2024</p>
                  <h3 className="text-lg font-semibold mb-4">
                    Indian Boxer Fails Doping Test, Disqualified From Olympic Qualifiers
                  </h3>
                  <a
                    href="#read-more"
                    className="text-blue-500 hover:text-blue-400 transition duration-200"
                  >
                    Read More &rarr;
                  </a>
                </div>
              ))}
          </div>

          {/* Dots for Pagination or Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {[0, 1].map((dot, idx) => (
              <span
                key={idx}
                className={`w-4 h-4 rounded-full ${
                  idx === 0 ? "bg-white" : "bg-gray-500"
                } transition duration-200 transform hover:scale-110`}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Styling */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Hero;
