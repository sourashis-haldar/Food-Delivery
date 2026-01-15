
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import {cartAction} from "../redux/Cart"
import { toast } from "react-toastify";
import { QuantityActions } from "../redux/Quantity";
function Card({item}) {

    
  const dispatch = useDispatch();
  const handelAdd = () => {
     toast.success("Item Added");
    dispatch(cartAction.Additem(item.id));
    dispatch(QuantityActions.addQuantity({ id: item.id, qty: 1 ,price:item.price}));
  }
  

  return (
    <div className="bg-white h-93 w-70  m-5 p-4 rounded-lg flex flex-col gap-3 hover:border-2 border-green-300 ">
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img src={item.food_image} alt="" className="object-cover" />
      </div>

      <div className="text-xl font-semibold">{item.food_name} </div>
      <div>
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-green-600">
            Rs {item.price} /-
          </div>
          <div className="flex justify-center items-center gap-2 text-green-600">
            {item.food_type == "veg" ? <LuLeafyGreen /> : <GiChickenOven />}

            <div className="text-lg font-semibold"> {item.food_type}</div>
          </div>
        </div>
      </div>

      <button
        onClick={handelAdd}
        className="bg-green-300 p-2 font-semibold rounded-lg hover:bg-green-400 cursor-pointer"
      >
        Add to Dish
      </button>
    </div>
  );
}

export default Card






