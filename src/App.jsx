import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SpeakUp from "./components/SpeakUp";

const events = [
  {
    date: "02",
    monthYear: "Oct 2024",
    description: "2025 Social Science Research (SSR) Grant Program: Overview & Application Process (In English).",
  },
  {
    date: "08",
    monthYear: "Sep 2024",
    description: "2025 Social Science Research (SSR) Grant Program: Overview & Application Process (In English).",
  },
  {
    date: "09",
    monthYear: "Sep 2024",
    description: "2025 Social Science Research (SSR) Grant Program: Overview & Application Process (In English).",
  },
  {
    date: "02",
    monthYear: "Oct 2024",
    description: "2025 Social Science Research (SSR) Grant Program: Overview & Application Process (In English).",
  },
];

function UpcomingEvents() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-green-400 animate-fade-in">
        Upcoming Events
      </h2>
      <div className="space-y-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center border-b border-gray-700 pb-4 hover:bg-gray-800 transition duration-300 p-4 rounded-lg shadow-md"
          >
            <div className="text-center w-20">
              <div className="text-6xl font-extrabold text-green-400">{event.date}</div>
              <div className="text-xl font-light text-gray-400">{event.monthYear}</div>
            </div>
            <div className="ml-8 flex-grow">
              <p className="text-gray-200 font-medium text-lg">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App bg-gray-800 min-h-screen">
      <Header />
      <Hero />
      <SpeakUp />
      <UpcomingEvents />
    </div>
  );
}

export default App;
