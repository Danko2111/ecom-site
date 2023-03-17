import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(1);

  //   useEffect(() => {
  //     setCart(JSON.parse(localStorage.getItem("cart")));
  //   }, []);

  //function to handle user updating cart with new items and also setting the cart data to localstorage to retain cart info if user leaves site.
  const addItem = (newItem, qty) => {
    if (cart.find((item) => item.id === newItem.id)) {
      let newCartData = cart.map((item) => {
        if (item.id === newItem.id) {
          return { ...item, quantity: item.quantity + qty };
        }
      });
      localStorage.setItem("cart", JSON.stringify(newCartData));
      setCart(newCartData);
    } else {
      newItem.quantity = qty;
      let newCartData = [...cart, newItem];
      localStorage.setItem("cart", JSON.stringify(newCartData));
      setCart((prevCart) => [...prevCart, newItem]);
      console.log("test");
    }
  };

  const removeItem = (itemId) => {
    if (cart.find((item) => item.id === newItem.id)) {
      newCartData = cart.filter((item) => item.id !== itemId);
      setCart(newCartData);
      localStorage.setItem("cart", JSON.stringify(newCartData));
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => prevQty - 1);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        setCart,
        qty,
        setQty,
        incQty,
        decQty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
