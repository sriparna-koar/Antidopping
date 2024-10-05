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
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="flex items-center border-b border-gray-300 pb-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-black leading-tight">{event.date}</div>
              <div className="text-xl font-light text-gray-600">{event.monthYear}</div>
            </div>
            <div className="ml-6 flex-grow">
              <p className="text-gray-800 font-medium text-lg">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SpeakUp />
      <UpcomingEvents />
    </div>
  );
}

export default App;
