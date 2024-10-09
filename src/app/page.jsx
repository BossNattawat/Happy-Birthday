"use client"

import { useState } from "react";

export default function Home() {
  const [lightOn, setLightOn] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${
        lightOn ? "bg-yellow-100" : "bg-gray-900"
      }`}
    >
      <div className="mb-8 flex flex-col items-center">
        <div className="flex items-center">

          {/* Light switch */}
          <label className="relative inline-block w-16 h-8 mx-4">
            <input type="checkbox" checked={lightOn} onChange={() => setLightOn(!lightOn)} className={`toggle theme-controller ${lightOn ? "bg-yellow-500 hover:bg-yellow-500" : "bg-gray-40"}`} />
          </label>
          
        </div>
      </div>

      {lightOn && (
        <div className="card w-96 xl:w-[400px] bg-yellow-500 text-white shadow-xl transition-opacity duration-500 ease-in-out">
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-[28px] xl:text-[30px] mb-3 xl:mb-4 text-center">🎉 Happy Birthday! 🎉</h2>
            <p className="text-[17px] xl:text-[20px]">"May this special year bring you closer to your dreams, fill your days with endless joy, and bless you with happiness. As you step into a new chapter, may you continue to shine brightly and uplift everyone around you. Wishing you a beautiful and bright future!"</p>
          </div>
        </div>
      )}
    </div>
  );
}
