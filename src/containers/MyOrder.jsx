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
				<p>{state.cart.length}</p>
				<OrderItem/>
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;