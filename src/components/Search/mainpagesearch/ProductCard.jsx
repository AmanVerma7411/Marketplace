import React from "react";
import ProductCardInfo from "../../ProductCardInfo";

const data = new Array(12).fill({
  image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  title: "Grand Point",
  subtitle: "Tea, Stall at Grand Point",
  price: "₹XXXX",
  promotedBy: "Company Name",
});

export default function ProductCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-4">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-50  object-cover flex items-center "
          />
          <div className="p-4">
            <h2 className="font-bold text-lg">{item.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
            <p className="mt-2 font-semibold">{item.price}</p>
            <div className="flex items-center mt-2 space-x-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111498.png"
                alt="Pinterest"
                className="w-4 h-4"
              />
              <p className="text-sm text-gray-500">
                Promoted by <span className="font-medium">{item.promotedBy}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
