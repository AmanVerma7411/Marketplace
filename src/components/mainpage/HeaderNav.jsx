
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faSearch, faUser,faTag,faLocationDot, faFilter} from '@fortawesome/free-solid-svg-icons';
export default function HeaderNav(){
    return (
        <>
        <div className="bg-black h-30 flex items-center justify-between pl-20">
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faStore} className="text-blue-600 text-4xl" />
        <h2 className="text-4xl text-white font-semibold">Marketplace</h2>
      </div>
      <div className="flex items-center space-x-15 pr-20">
         <FontAwesomeIcon icon={faUser} className="text-white text-4xl cursor-pointer" />
        <FontAwesomeIcon icon={faSearch} className="text-white text-4xl cursor-pointer" />     
      </div>
    </div>
    <div className="flex justify-center items-center h-25 space-x-6 ">
    
      <div className="bg-gray-200 px-5 py-2 w-48 rounded-full flex items-center space-x-2 cursor-pointer">
        <FontAwesomeIcon icon={faTag} className="text-red-600 pl-5" />
        <span className="text-red-600 font-semibold text-2xl">Seller</span>
      </div>

     
      <div className="bg-gray-200 pl-5 py-2 w-48 rounded-full flex items-center space-x-2 cursor-pointer">
        <FontAwesomeIcon icon={faUser} className="text-red-600 pl-5" />
        <span className="text-red-600 font-semibold text-2xl">Buyer</span>
      </div>
    </div>
    <hr></hr>
    <div className="flex justify-between items-center px-6 py-4">
      <div>
        <h2 className="text-5xl font-bold text-black">Lucknow</h2>
        <p className="text-gray-400 text-2xl">
          25 products found in <span className="text-red-600 font-semibold">shops</span> category
        </p>
      </div>

      <div className="flex items-center space-x-15">
        <FontAwesomeIcon icon={faLocationDot} className="text-red-600 text-4xl cursor-pointer" />
        <FontAwesomeIcon icon={faFilter} className="text-red-600 text-4xl cursor-pointer" />
      </div>
    </div>
        </>
    );
}