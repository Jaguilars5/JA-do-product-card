import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
	const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProductInCart }>({});

	const onProductCartChange = ({ count, product }: { count: number; product: Product }) => {
		setShoppingCard((oldShoppingCart) => {
			if (count === 0) {
				const { [product.id]: toDelete, ...rest } = oldShoppingCart;

				return {
					...rest,
				};
			}

			return {
				...oldShoppingCart,
				[product.id]: { ...product, count },
			};
		});
	};
	return {
		onProductCartChange,
		shoppingCard,
	};
};
