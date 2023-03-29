import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);

  //on component mount get localstorage data for cartitems and set it to global state.
  useEffect(() => {
    const cartData = localStorage.getItem("cartItems");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  //function to handle user updating cart with new items and also setting the cart data to localstorage to retain cart info if user leaves site.
  const addItem = (newItem, qty) => {
    if (cart.find((item) => item.id == newItem.id)) {
      let newCartData = cart.map((item) => {
        if (item.id == newItem.id) {
          return { ...item, quantity: item.quantity + qty };
        } else {
          return item;
        }
      });
      setCart(newCartData);
      localStorage.setItem("cartItems", JSON.stringify(newCartData));
    } else {
      newItem.quantity = qty;
      const newCartData = [...cart, newItem];
      setCart((prevCart) => [...prevCart, newItem]);
      localStorage.setItem("cartItems", JSON.stringify(newCartData));
    }
  };

  const removeItem = (itemId) => {
    if (cart.find((item) => item.id === itemId)) {
      const newCartData = cart.filter((item) => item.id !== itemId);
      setCart(newCartData);
      localStorage.setItem("cartItems", JSON.stringify(newCartData));
    }
  };

  const changeQty = (newQty, itemId) => {
    const newCartData = cart.map((item) => {
      if (item.id == itemId) {
        return { ...item, quantity: newQty };
      } else {
        return item;
      }
    });
    setCart(newCartData);
    localStorage.setItem("cartItems", JSON.stringify(newCartData));
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
        changeQty,
        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
