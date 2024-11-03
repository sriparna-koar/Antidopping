import React from "react";

const SpeakUp = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-center py-16 px-4 text-white">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">SPEAK UP</h2>
      <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto">
        Help Us Protect The Clean Athlete And The Integrity Of The Sport
      </p>
      <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-sm md:text-base">
        Every time someone steps forward with information on doping, we move closer to a clean and fair playing field for all.
      </p>
      <button className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-500 transition duration-300 transform hover:scale-105">
        Report Doping &rarr;
      </button>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -left-8 top-8 w-24 h-24 bg-gradient-to-br from-green-600 to-transparent rounded-full filter blur-2xl"></div>
        <div className="absolute -right-8 bottom-8 w-32 h-32 bg-gradient-to-br from-green-500 to-transparent rounded-full filter blur-2xl"></div>
      </div>

      {/* Additional Styling */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default SpeakUp;
