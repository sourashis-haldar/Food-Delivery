import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Datacontext } from '../store/Usercontext';
import { useSelector } from 'react-redux';
function Nav() {

  const cartitem = useSelector(store => store.cart);
  
  const { cate, setcate, input, setinput, food_items,showcart,setshowcart } = useContext(Datacontext);
  useEffect(() => {
    let newarr = food_items.filter((item) =>  item.food_name.includes(input)|| item.food_name.toLowerCase().includes(input) );
    setcate(newarr)
  }, [input]);

  return (
    <div className="w-full h-25  flex justify-between items-center px-5 md:px-8">
      <div className="w-16 h-16 bg-white flex justify-center items-center rounded-md shadow-xl">
        <MdFastfood className="w-8 h-8 text-green-500" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='h-15 w-1/2 bg-white rounded-md flex items-center px-5  gap-5 shadow-xl md:w-2/3'>
        <FaSearch className='h-4 w-4 text-green-500' />
        <input onChange={(e) => setinput(e.target.value)} type="text" placeholder="Search items.."  className='w-full border-0 outline-0 text-lg'/>
      </form>
          <div onClick={()=>{setshowcart(true)}}  className="w-16 h-16 bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer">
        <span className='absolute top-0 right-2 text-green-500 font-semibold'>{ cartitem.length}</span>
        <FaShoppingBag className="w-8 h-8 text-green-500" />
      </div>
    </div>
  );
}

export default Nav