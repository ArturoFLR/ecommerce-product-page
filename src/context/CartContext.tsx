import { createContext, useState } from "react";
import { cartItem } from "../types/cartItem";

type CartContextType = {
	cart: cartItem,
	setCart: React.Dispatch<React.SetStateAction<cartItem>>,
	cartRender: boolean,
	setCartRender: React.Dispatch<React.SetStateAction<boolean>>
}

type CartProviderProps = {
	children: React.ReactNode
}

const initialCartItem = {
	image: "img/image-product-1-thumbnail.jpg",
	name: "Fall Limited Edition Sneakers",
	price: 125,
	amount: 0
};

const CartContext = createContext<CartContextType>({
	cart: initialCartItem,
	setCart: () => {},
	cartRender: false,
	setCartRender: () => {}
});

export function CartProvider ({children}: CartProviderProps) {
	const [cart, setCart] = useState(initialCartItem);
	const [cartRender, setCartRender] = useState(false);

	return (
		<CartContext.Provider value={{cart, setCart, cartRender, setCartRender}}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;
