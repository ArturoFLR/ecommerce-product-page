import { useEffect } from "react";
import styles from "./Menu.module.scss";

function Menu() {
	let closeMenuTimeout: number;

	function handleOpenMenu () {
		const menu = document.getElementById("mainContainerMobile")  as HTMLDivElement;
		menu.classList.add(styles.menuMobile);
	}

	function handleCloseMenu () {
		const menu = document.getElementById("mainContainerMobile")  as HTMLDivElement;
		menu.classList.remove(styles.menuMobile);
		menu.classList.add(styles.menuMobileClosing);
		closeMenuTimeout = setTimeout( () => {
			menu.classList.remove(styles.menuMobileClosing);
		},1000);
	}
	
	useEffect( () => {
		return () => clearTimeout(closeMenuTimeout);
	});

	return (
		<>
			<div className={styles.mainContainer} >
				<a href="#">Collections</a>
				<a href="#">Men</a>
				<a href="#">Women</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</div>

			<div className={styles.mainContainerMobile} id="mainContainerMobile" >
				<div className={styles.linksContainerMobile}>
					<img alt="Close menu" src="icon/icon-close.svg" onClick={handleCloseMenu} />
					<a href="#">Collections</a>
					<a href="#">Men</a>
					<a href="#">Women</a>
					<a href="#">About</a>
					<a href="#">Contact</a>
				</div>
			</div>

			<img className={styles.menuIcon} alt="Main navigation menu" src="icon/icon-menu.svg" onClick={handleOpenMenu}/>
		</>
	);
}

export default Menu;
