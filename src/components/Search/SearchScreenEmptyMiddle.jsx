
export default function SearchScreenEmptyMiddle(){
    return(
      <div className="h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4072/4072475.png"
          alt="Search Icon"
          className="mx-auto w-24 h-24 mb-6"
        />

        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          What are <br /> you searching for?
        </h2>

        <p className="text-2xl text-gray-400 max-w-xs mx-auto">
          Search for your favourite thing or find similar results in this area.
        </p>
      </div>
    </div>
    );
}