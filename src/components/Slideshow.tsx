import styles from "./Slideshow.module.scss";
import { sneakersFLE } from "./../Data/SneakersFLE";
import { useState } from "react";

function Slideshow() {
	const [selectedImg, setSelectedImg] = useState(sneakersFLE.images[0]);
	const [selectedImgLightBox, setSelectedImgLightBox] = useState(sneakersFLE.images[0]);

	// Change thumbnail classes to show which one is selected. Selecting a thumbnail in the Slideshow will change the same thumbnail in the Lightbox, but the opposite is not true.
	function changeSelectedThumbnail (element: HTMLImageElement, elementIndex: number): void {
		const allThumbnails = document.querySelectorAll(`.${styles.thumbnail}`);
		const allThumbnailsLB = document.querySelectorAll(`.${styles.thumbnailLB}`);
		const isAnLBThumbnail = element.classList.contains(styles.thumbnailLB);


		allThumbnailsLB.forEach( (element) => {
			element.classList.remove(styles.selectedLBThumbnail);

			if (element.id === String(elementIndex)) {
				element.classList.add(styles.selectedLBThumbnail);
			}
		});

		if(!isAnLBThumbnail) {
			allThumbnails.forEach( (element) => {
				element.classList.remove(styles.selectedThumbnail);
	
				if (element.id === String(elementIndex)) {
					element.classList.add(styles.selectedThumbnail);
				}
			});
		}
	}

	// Changes the main image according to the clicked thumbnail. Changing the Slideshow image will also change the Lightbox image, but the opposite is not true. Change the classes of the thumbnails, calling changeSelectedThumbnail().
	function handleThumbnailClick (event: React.MouseEvent<HTMLImageElement>): void {
		const selectedThumbnail = event.target as HTMLImageElement;
		const selectedThumbnailIndex = Number(selectedThumbnail.id);
		const isAnLBThumbnail = selectedThumbnail.classList.contains(styles.thumbnailLB);

		changeSelectedThumbnail(selectedThumbnail, selectedThumbnailIndex);

		if (!isAnLBThumbnail) {
			setSelectedImg(sneakersFLE.images[selectedThumbnailIndex]);
		}

		setSelectedImgLightBox(sneakersFLE.images[selectedThumbnailIndex]);
	}

	// Opens the Lightbox
	function openLightbox() {
		const lightBox = document.querySelector(`.${styles.lightBoxContainer}`) as HTMLDivElement;
		lightBox.classList.remove(styles.hide);
	}
	

	// Closes the Lightbox
	function closeLightbox (event: React.MouseEvent<HTMLElement>): void {
		const clickedElement = event.target as HTMLElement;
		if(clickedElement.id === "lightBoxContainer" || clickedElement.id === "closeX") {
			const lightBox = document.querySelector(`.${styles.lightBoxContainer}`) as HTMLDivElement;
			lightBox.classList.add(styles.hide);
		}
	}

	// Changes to the next photo in the Lightbox when an arrow is pressed.
	function handleArrowClick (event: React.MouseEvent<HTMLElement>): void {
		const arrowClicked = event.target;
		const arrowType = (arrowClicked as HTMLElement).id;

		const actualThumbnailSelected = document.querySelector(`.${styles.selectedLBThumbnail}`) as HTMLImageElement;
		const actualImgIndex = Number(actualThumbnailSelected.id);
		const imagesMaxIndex = sneakersFLE.images.length - 1;
		
		// Variables needed to change the selected thumbnail using the "changeSelectedThumbnail" function
		const nextThumbnailIndex = actualImgIndex < imagesMaxIndex
			? actualImgIndex + 1
			: 0;
		const nextThumbnail = document.querySelector(`.${styles.thumbnailLB}[id="${nextThumbnailIndex}"]`) as HTMLImageElement;
		const prevThumbnailIndex = actualImgIndex > 0
			? actualImgIndex - 1
			: 3;
		const prevThumbnail = document.querySelector(`.${styles.thumbnailLB}[id="${prevThumbnailIndex}"]`) as HTMLImageElement;

		// Changes the main image
		if (arrowType === "next" && actualImgIndex < imagesMaxIndex) {
			setSelectedImgLightBox(sneakersFLE.images[actualImgIndex + 1]);
		}else if (arrowType === "next" && actualImgIndex === imagesMaxIndex) {
			setSelectedImgLightBox(sneakersFLE.images[0]);
		}
		if (arrowType === "previous" && actualImgIndex > 0) {
			setSelectedImgLightBox(sneakersFLE.images[actualImgIndex - 1]);
		}else if (arrowType === "previous" && actualImgIndex === 0) {
			setSelectedImgLightBox(sneakersFLE.images[imagesMaxIndex]);
		}

		// Changes the selected thumbnail
		if (arrowType === "next") {
			changeSelectedThumbnail(nextThumbnail, nextThumbnailIndex);
		}else {
			changeSelectedThumbnail(prevThumbnail, prevThumbnailIndex);
		}
	}

	return (
		<div className={styles.mainContainer}>
			<div className={styles.mainImg}>
				<img alt="Product image" src={selectedImg} onClick={openLightbox}/>
			</div>

			<div className={styles.thumbnails}>
				{
					sneakersFLE.thumbnails.map( (element: string, index): React.ReactNode => {
						return (
							<div key={`A${index}`} className={styles.thumbnailContainer}>
								<img 
									alt="Product thumbnail"
									src= {element}
									key={index}
									id={String(index)}
									className={index === 0
										? `${styles.selectedThumbnail} ${styles.thumbnail}`
										: `${styles.thumbnail}`
									}
									onClick={handleThumbnailClick}
								/>
							</div>
						);
					})
				}
			</div>

			<div className={`${styles.lightBoxContainer} ${styles.hide}`}  id="lightBoxContainer" onClick={closeLightbox}>
				<div className={styles.mainImgLB}>
					<img alt="Close Lightbox" src="icon/icon-close.svg" className={styles.closeX}  id="closeX" onClick={closeLightbox}/>
					<div  className={styles.previous} >
						<img alt="Close Lightbox" src="icon/icon-previous.svg" id="previous" onClick={handleArrowClick}/>
					</div>
					<div  className={styles.next} >
						<img alt="Close Lightbox" src="icon/icon-next.svg" id="next" onClick={handleArrowClick} />
					</div>
					<img alt="Product image" src={selectedImgLightBox}/>
				</div>

				<div className={styles.thumbnailsLB}>
					{
						sneakersFLE.thumbnails.map( (element: string, index): React.ReactNode => {
							return <img 
								alt="Product thumbnail"
								src= {element}
								key={index}
								id={String(index)}
								className={index === 0
									? `${styles.selectedLBThumbnail} ${styles.thumbnailLB}`
									: `${styles.thumbnailLB}`
								}
								onClick={handleThumbnailClick}
							/>;
						})
					}
				</div>
			</div>
		</div>
	);
}

export default Slideshow;
