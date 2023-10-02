import { useContext, useState } from "react";
import { sneakersFLE } from "../Data/SneakersFLE";
import styles from "./ProductData.module.scss";
import CartContext from "../context/CartContext";

function ProductData() {
	const [counter, setCounter] = useState(0);
	const finalPrice = sneakersFLE.price * sneakersFLE.discount / 100;
	const {cart, setCart} = useContext(CartContext);

	function handleAddProductClick () {
		setCounter(counter + 1);
	}

	function handleRemoveProductClick () {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	}

	function handleAddToCartClick () {
		const itemToAdd = {
			image: "img/image-product-1-thumbnail.jpg",
			name: "Fall Limited Edition Sneakers",
			price: 250,
			amount: cart.amount + counter
		};
		setCart(itemToAdd);
		setCounter(0);
	}

	return (
		<div className={styles.mainContainer}>
			<h1>Sneaker Company</h1>
			<h2>{sneakersFLE.name}</h2>
			<p className={styles.description}> {sneakersFLE.description} </p>

			<div className={styles.priceAndDiscount}>
				<p className={styles.finalPrice}>
					{`$${finalPrice}.00`}
					<span className={styles.discount}>{`${sneakersFLE.discount}%`}</span>
				</p>
				<p className={styles.price}>{`$${sneakersFLE.price}.00`}</p>
			</div>

			<div className={styles.counter}>
				<div className={styles.imgContainer} onClick={handleRemoveProductClick} >
					<img alt="Remove product" src="icon/icon-minus.svg" />
				</div>
				<p>{counter}</p>
				<div className={styles.imgContainer} onClick={handleAddProductClick} >
					<img alt="Add product" src="icon/icon-plus.svg" />
				</div>
			</div>
			<button type="button" className={styles.addToCartButton} onClick={handleAddToCartClick}>
				<img alt="" src="../../public/icon/icon-cart.svg" />
				<p>Add to cart</p>
			</button>
		</div>
	);
}

export default ProductData;
