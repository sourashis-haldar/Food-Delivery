
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from "../redux/Cart"
import { QuantityActions } from "../redux/Quantity";
function Addcart({ item }) {
  const dispatch = useDispatch();
  const Quanty = useSelector((store) => store.Qunatity);
  console.log(Quanty);
  const Quantityobj = Quanty.find((element) => element.id == item.id);
  const handeldelete = () => {
    dispatch(cartAction.Removeitem(item.id));
  }
  return (
    <div className="w-full h-30 shadow-lg p-3 flex justify-between items-center gap-0">
      <div className="md:w-[85%] w-full h-full  flex ">
        <div className="w-[30%] h-full overflow-hidden rounded-lg">
          <img src={item.food_image} alt="" className="object-cover" />
        </div>
        <div className="w-[60%] h-full flex flex-col md:gap-5 gap-2 px-3 py-2">
          <div className="md:text-lg font-semibold  text-sm">{item.food_name}</div>
          <div className="md:w-30  w-22 md:h-14 h-12 flex justify-center items-center rounded-lg overflow-hidden border border-green-500">
            <button  onClick={()=> dispatch(QuantityActions.decrement(item.id))} className="md:w-10  w-7 h-full cursor-pointer text-xl  ">
              -
            </button>
            <div className="md:w-10 w-7 h-full text-center flex items-center justify-center border-x border-x-green-500">
              {Quantityobj.qty}
            </div>
            <button onClick={()=>dispatch(QuantityActions.increment(item.id))} className="md:w-10 w-7 h-full cursor-pointer text-xl ">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-green-500 font-semibold">Rs {item.price}/-</span>
        <MdDelete  onClick={handeldelete} className="text-xl text-red-400 cursor-pointer" />
      </div>
    </div>
  );
}

export default Addcart;