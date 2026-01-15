import { useSelector } from "react-redux";
import { Datacontext } from "../store/Usercontext";
import Addcart from "./Addcart";
import { useContext } from "react";
function Bagcart() {
    const cartitem = useSelector(store => store.cart);
    
    
    const {food_items } = useContext(Datacontext);
    const Finalitem = food_items.filter((item) => {
        return cartitem.includes(item.id);

})




    return (
      <div>
        {Finalitem.map((item) => (
          <Addcart item={item} />
        ))}
      </div>
    );

}
export default Bagcart;