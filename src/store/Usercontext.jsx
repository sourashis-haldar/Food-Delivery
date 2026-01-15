import { createContext, useContext, useState } from "react";
import { food_items } from "../food";

export const Datacontext = createContext({
    food_items: [],
  
    
});


function DatacontextProvider({ children }) {
    const [cate, setcate] = useState(food_items);
    const [input, setinput] = useState("");
    const [showcart, setshowcart] = useState(false);
    return <Datacontext.Provider value={{
        food_items: food_items,
        cate,
        setcate,
        input,
        setinput,
        showcart,
        setshowcart
    }} >
        {children}
    </Datacontext.Provider>
}
export default DatacontextProvider;