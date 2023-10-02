import styles from "./App.module.scss";
import CartDetails from "./components/CartDetails";
import Header from "./components/Header";
import ProductData from "./components/ProductData";
import Slideshow from "./components/Slideshow";
import { CartProvider } from "./context/CartContext";

function App() {
	return (
		<CartProvider>
			<header className={styles.headerContainer}>
				<Header />
			</header>

			<main className={styles.mainContainer}>
				<div className={styles.cartContainer}>
					<CartDetails />
				</div>
				<div className={styles.slideshowContainer}>
					<Slideshow />
				</div>

				<div className={styles.productDataContainer}>
					<ProductData />
				</div>
			</main>
		</CartProvider>
	);
}

export default App;
