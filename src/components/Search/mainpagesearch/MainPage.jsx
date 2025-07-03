import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faSearch, faUser,faTag,faLocationDot, faFilter} from '@fortawesome/free-solid-svg-icons';
import HeaderNav from './HeaderNav';
import ProductCard from "./ProductCard";
import BottomNav from './BottomNav';
export default function MainPage(){
       return(
        <>
           <HeaderNav/>
           <ProductCard />
          <BottomNav/>
        </>
       );
}