import HeaderNav from './HeaderNav';
import ProductCard from "./ProductCard";
import BottomNav from './BottomNav';
export default function MainPage(){
       return(
        <div>
           <HeaderNav/>
           <ProductCard />
          <BottomNav/>
        </div>
       );
}