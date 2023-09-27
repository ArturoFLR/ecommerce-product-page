// A product total data
export type Product = {
	name: string,
	description: string,
	price: number,
	discount: number,
	images: string[],
	thumbnails: string[]
}

// Product data used in the cart
export type cartItem = {
	image: string,
	name: string
	price: number,
	amount: number
}
