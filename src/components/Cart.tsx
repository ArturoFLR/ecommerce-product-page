import { useContext } from "react";
import styles from "./Cart.module.scss";
import CartContext from "../context/CartContext";

function Cart() {
	const {cart, cartRender, setCartRender} = useContext(CartContext);
	

	function onClickCart () {
		setCartRender(!cartRender);
	}

	return (
		<div className={styles.mainContainer}>
			<img alt="Your cart" src="icon/icon-cart.svg" onClick={onClickCart}/>
			<p className={cart.amount
				? styles.numberOfItems
				: `${styles.hide} ${styles.numberOfItems}`
			}>
				{cart.amount}
			</p>
		</div>
	);
}

export default Cart;
