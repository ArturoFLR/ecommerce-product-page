import { useContext } from "react";
import styles from "./CartDetails.module.scss";
import CartContext from "../context/CartContext";

function CartDetails() {
	const {cart, setCart, cartRender} = useContext(CartContext);
	const totalPrice = cart.price * cart.amount;

	function deleteProduct () {
		const cartCopy = {
			...cart
		};
		cartCopy.amount = 0;
		setCart(cartCopy);
	}

	return (
		<div className={
			cartRender
				? styles.mainContainer
				: `${styles.mainContainer} ${styles.hide}`
		}>
			<h2>Cart</h2>

			{
				cart.amount
					? (
						<>
							<div className={styles.productDetailsContainer}>
								<img className={styles.productImg} alt="Product image" src={cart.image} />
								<div className={styles.nameAndPrice}>
									<p className={styles.productName}>{cart.name}</p>
									<p className={styles.productPrice}>{`$${cart.price}.00 x ${cart.amount}`} <span>{`$${totalPrice}.00`}</span></p>
								</div>
								<img className={styles.productDelete} alt="Delete product" src="icon/icon-delete.svg" onClick={deleteProduct} />
							</div>
							<button type="button">Checkout</button>
						</>
					)
					: <p className={styles.emptyCart}>Your cart is empty.</p>
			}
		</div>
	);
}

export default CartDetails;