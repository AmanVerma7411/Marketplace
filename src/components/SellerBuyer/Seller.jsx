import { useState } from "react";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";

export default function Seller() {
  const [formData, setFormData] = useState({
    item: "",
    name: "",
    contact: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-6">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
        
        <div className="relative flex items-center justify-between mb-6">
          <button
            className="text-gray-500 text-lg"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft />
          </button>
          <h2 className="absolute left-1/2 transform -translate-x-1/2 text-gray-500 font-medium text-lg sm:text-2xl">
            Raise a query
          </h2>
        </div>

        <p className="text-lg text-black font-semibold">HELLO!</p>
        <h1 className="text-3xl font-bold mb-6">Seller</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">What do you want to sell</label>
            <input
              type="text"
              name="item"
              value={formData.item}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Contact Number</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded h-24"
              placeholder="Description"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded font-bold"
          >
            SUBMIT
          </button>
        </form>

        <div className="text-center my-4 text-gray-400">OR</div>

    
        <button className="w-full border border-green-500 text-green-600 py-3 rounded flex items-center justify-center gap-2">
          <FaWhatsapp />
          Whatsapp Us
        </button>
      </div>
    </div>
  );
}
