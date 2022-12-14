import React, {useState, useContext} from 'react'
import Menu from './Menu'
import AppContext from '../context/AppContext'
import "../styles/Header.css"
import MyOrder from '../containers/MyOrder'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleOrders , setToggleOrders] = useState(false)
  const {state} = useContext(AppContext)

  const handleToogle = () => {
    setToggle(!toggle)
  }
  return (
    <nav>
    <img src="../../img/icons/icon_menu.svg" alt="menu" className="menu"/>

    <div className="navbar-left">
      <img src="../../img/logos/logo_yard_sale.svg" alt="logo" className="nav-logo"/>

      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

    <div className="navbar-right">
      <ul>
        <li className="navbar-email" onClick={handleToogle}>platzi@example.com</li>
        <li 
          className="navbar-shopping-cart" 
          onClick={ ()=> setToggleOrders(!toggleOrders)}
        >
          <img src="../../img/icons/icon_shopping_cart.svg" alt="shopping cart"/>
          {state.cart.length > 0 ? <div> {state.cart.length} </div> : null }
        </li>
      </ul>
    </div>
    {toggle && <Menu/>}
    {toggleOrders && <MyOrder/>}
  </nav>
  )
}

export default Header