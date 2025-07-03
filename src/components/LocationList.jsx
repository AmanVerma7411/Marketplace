import { useState } from "react";

export default function LocationList() {
  const [selected, setSelected] = useState("Category 1");
  const location = ["Lucknow", "Barabanki", "Lakhimpur", "Sitapur","Ayodhya"];

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-[400px] h-[400px] p-8 bg-white shadow-lg rounded-xl">
        <h2 className="text-center text-gray-800 font-bold mb-6 text-3xl">Location</h2>
        <ul className="space-y-4 text-xl">
          {location.map((loc) => (
            <li
              key={loc}
              onClick={() => setSelected(loc)}
              className={`w-full text-center py-2 rounded cursor-pointer ${
                selected === loc ? "text-black font-semibold bg-gray-200" : "text-gray-500"
              }`}
            >
              {selected === loc ? `✓ ${loc}` : loc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
