import { FaStore, FaUser, FaMapMarkerAlt, FaFilter, FaCheck } from "react-icons/fa";

export default function Demo() {
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];
  const products = new Array(4).fill({
    title: "Grand Point",
    subtitle: "Tea, Stall at Grand Point",
    price: "₹XXXX",
    promoter: "Company Name",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Grand_Point.jpg/640px-Grand_Point.jpg"
  });

  return (
    <div className="min-h-screen bg-white px-4 py-4">
      {/* Top Header */}
      <div className="bg-pink-100 p-4 flex items-center justify-between rounded">
        <div className="text-pink-700 font-bold text-lg">Marketplace</div>
        <FaUser className="text-pink-700 text-xl" />
      </div>

      {/* Seller / Buyer Buttons */}
      <div className="flex justify-around mt-4">
        <button className="flex flex-col items-center">
          <FaStore className="text-pink-700 text-xl" />
          <span className="text-sm text-pink-700 font-semibold">Seller</span>
        </button>
        <button className="flex flex-col items-center">
          <FaUser className="text-pink-700 text-xl" />
          <span className="text-sm text-pink-700 font-semibold">Buyer</span>
        </button>
      </div>

      {/* Location and Filter */}
      <div className="flex justify-between items-center mt-6 mb-2">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Lucknow</h2>
          <p className="text-sm text-gray-500">25 products found in <span className="text-pink-500 font-semibold">shops</span> category</p>
        </div>
        <div className="flex space-x-4">
          <FaMapMarkerAlt className="text-pink-500 text-lg" />
          <FaFilter className="text-pink-500 text-lg" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-2">
            <img src={product.image} alt="product" className="w-full h-24 object-cover rounded-md mb-2" />
            <h3 className="text-sm font-semibold text-gray-800">{product.title}</h3>
            <p className="text-xs text-gray-500">{product.subtitle}</p>
            <p className="text-sm font-bold mt-1">{product.price}</p>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-pink-600">📌</span> Promoted by {product.promoter}
            </p>
          </div>
        ))}
      </div>

      {/* Category Section */}
      <div className="mt-8 border-t pt-4">
        <h4 className="text-center font-semibold text-gray-800 mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map((category, idx) => (
            <label key={idx} className="flex items-center space-x-2 px-2">
              <input
                type="radio"
                name="category"
                defaultChecked={idx === 0}
                className="hidden"
              />
              <span className="text-pink-600">{idx === 0 && <FaCheck />}</span>
              <span className="text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
