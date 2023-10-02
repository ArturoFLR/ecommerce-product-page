import Cart from "./Cart";
import styles from "./Header.module.scss";
import Menu from "./Menu";

function Header() {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.logoMenuContainer}>
				<img className={styles.logoImg} alt="Sneakers Logo" src="img/logo.svg" />

				<div className={styles.menuContainer}>
					<Menu />
				</div>



			</div>

			<div className={styles.cartProfileContainer}>
				<div className={styles.cartContainer}>
					<Cart />
				</div>

				<div className={styles.profileContainer}>
					<img alt="Your account" src="img/image-avatar.png" />
				</div>
			</div>
		</div>
	);
}

export default Header;
