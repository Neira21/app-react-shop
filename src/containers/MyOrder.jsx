import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.css';

const MyOrder = () => {
	const {state} = useContext(AppContext);
	
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src="../../img/icons/flechita.svg" alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				<div className="seccion-scroll">
					{state.cart.map((product, index) => (
						<OrderItem product={product} key={index}/>
					))}
				</div>
			
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>
						${state.cart.reduce((total, product) => total + product.price, 0)}
					</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;