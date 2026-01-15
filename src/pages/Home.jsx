import { useContext, useEffect, useState } from "react";
import category from "../Category";
import Card from "../Components/Card";
import Nav from "../Components/Nav";
import { Datacontext } from "../store/Usercontext";
import { RxCross2 } from "react-icons/rx";
import Addcart from "../Components/Addcart";
import { useSelector } from "react-redux";
import Bagcart from "../Components/Bagcart";
function Home() {
  const quantobj = useSelector(store => store.Qunatity);
  const { food_items ,setcate,cate,input,setinput,showcart,setshowcart} = useContext(Datacontext);
  
  function filtercate(categ) {
    if (categ== "All") {
      setcate(food_items);
    }
    else {
      let arr = food_items.filter((item) => categ == item.food_category);
      setcate(arr);

    }

  }
  
  const cartitem = useSelector(store => store.cart);
      const Finalitem = food_items.filter((item) => {
        return cartitem.includes(item.id);
      });



  let price = quantobj.reduce((total, item) => total + item.price * item.qty, 0);



  let SubTotal = price;
  let deliveryFee = 20;
  let taxes = SubTotal * 0.5 / 100;
  let GrandTotal = SubTotal + deliveryFee + taxes;
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav></Nav>
      {input == "" ? (
        <div className="flex flex-wrap justify-center items-center-center gap-5">
          {category.map((item) => {
            return (
              <div
                onClick={() => filtercate(item.name)}
                className="w-30 h-32 bg-white flex flex-col justify-center items-center gap-2 font-semibold shadow-xl rounded-md  active:bg-green-300 hover:bg-green-200 cursor-pointer transition-all"
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}
      <div className="flex justify-center items-center flex-wrap">
        {cate.map((item) => (
          <Card item={item}></Card>
        ))}
      </div>
      <div
        className={` w-full md:w-[40vw] h-full fixed p-6 bg-white top-0 right-0 shadow-xl trasnsition-all  overflow-x-scroll duration-500 ${
          showcart ? "translate--x-0" : "translate-x-full"
        }`}
      >
        <header className="w-full flex justify-between items-center p-4 ">
          <span className="text-green-400 text-[18px] font-semibold">
            {" "}
            Order Item
          </span>
          <RxCross2
            onClick={() => setshowcart(false)}
            className="w-7 h-7 text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600"
          />
        </header>
        <Bagcart />
        <div className="w-full border-t-2 border-gray-400  mt-2 flex flex-col justify-center items-center">
          <div className="flex w-full justify-between items-center mt-4 text-lg font-semibold">
            <span>Subtotal</span>
            <span className="text-green-500">Rs {SubTotal}/-</span>
          </div>
          <div className="flex w-full justify-between items-center mt-4 text-lg font-semibold">
            <span>Delivery Fee</span>
            <span className="text-green-500">Rs {deliveryFee}/-</span>
          </div>
          <div className="flex w-full justify-between items-center mt-4 text-lg font-semibold">
            <span>Taxes</span>
            <span className="text-green-500">Rs {taxes}/-</span>
          </div>
          <div className="flex w-full justify-between items-center border-t-2 border-gray-400 mt-4 text-lg font-semibold">
            <span>Total </span>
            <span className="text-green-500">Rs {GrandTotal}/-</span>
          </div>
          <button className="w-[80%] bg-green-300 p-2 font-semibold rounded-lg hover:bg-green-400 cursor-pointer mt-10">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
