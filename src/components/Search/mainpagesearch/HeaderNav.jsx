import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchBox() {
  return (
    <div className="bg-red-600 h-52 flex flex-col items-center justify-center space-y-4">
      <div className="text-4xl text-white font-semibold">Search</div>

      <div className="bg-white flex items-center rounded shadow mt-6 px-4 py-2 w-80">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full text-gray-700 bg-transparent"
        />
      </div>
    </div>
  );
}
