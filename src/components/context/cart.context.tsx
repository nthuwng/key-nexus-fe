import { createContext, useContext, useEffect, useState } from "react";

interface ICartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
}

interface ICartContext {
  cart: ICartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: string, color?: string) => void;
  updateQuantity: (id: string, quantity: number, color?: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<ICartContext | null>(null);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  // Load từ localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Save lại mỗi khi cart thay đổi
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: ICartItem) => {
    setCart((prev) => {
      const exist = prev.find(
        (p) => p.id === item.id && p.color === item.color,
      );

      if (exist) {
        return prev.map((p) =>
          p.id === item.id && p.color === item.color
            ? { ...p, quantity: p.quantity + item.quantity }
            : p,
        );
      }

      return [...prev, item];
    });
  };

  const removeFromCart = (id: string, color?: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.color === color)),
    );
  };

  const updateQuantity = (id: string, quantity: number, color?: string) => {
    if (quantity < 1) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.color === color ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)!;
