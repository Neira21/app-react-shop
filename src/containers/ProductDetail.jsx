import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src="../../img/icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;