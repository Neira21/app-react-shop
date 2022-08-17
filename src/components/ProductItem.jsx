import React, {useContext} from 'react';
import '../styles/ProductItem.css';
import AppContext from '../context/AppContext';

const ProductItem = ({product}) => {

	const {addToCart} = useContext(AppContext);

	const handleProduct = (item) => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=>handleProduct(product)} >
					<img src="../../img/icons/bt_add_to_cart.svg" alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;