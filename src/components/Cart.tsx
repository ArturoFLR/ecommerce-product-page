import { useContext, useEffect } from "react";
import styles from "./Cart.module.scss";
import CartContext from "../context/CartContext";

function Cart() {
	const {cart, cartRender, setCartRender} = useContext(CartContext);
	

	function onClickCart () {
		setCartRender(!cartRender);
	}

	useEffect( () => {
		const blob = document.querySelector(`.${styles.numberOfItems}`);
		if (cart.amount) {
			blob?.classList.add(styles.animateBlob);
		}
		const removeBlobAnimationClass = setTimeout(() => {
			blob?.classList.remove(styles.animateBlob);
		}
		, 620);

		return () => clearTimeout(removeBlobAnimationClass);
		
	});

	return (
		<div className={styles.mainContainer}>
			<img alt="Your cart" src="icon/icon-cart.svg" onClick={onClickCart}/>
			<p className={cart.amount
				? `${styles.numberOfItems} ${styles.animateBlob}`
				: `${styles.hide} ${styles.numberOfItems}`
			}>
				{cart.amount}
			</p>
		</div>
	);
}

export default Cart;
