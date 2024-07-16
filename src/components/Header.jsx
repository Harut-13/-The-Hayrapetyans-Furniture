import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Order from "./Order";

const showOrders =(props)=>{
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return(<div>
    {props.orders.map(el =>(
      <Order onDelete={props.onDelete} key={el.id} item={el}/>
    )) }
    <p className="summa">Total: ${new Intl.NumberFormat().format(summa)}</p>
  </div>)
}

const showNothing=()=>{
  return (<div className="empty">
       <h2>No goods</h2>
  </div>)
}

function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
      <div>
        <span className='logo'>House Staaff</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contacts</li>
          <li>Office</li>
        </ul>
        <FaCartShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

          {cartOpen && (
            <div className="shop-cart">
              {props.orders.length > 0 ?
                 showOrders(props) : showNothing()}
            </div>
          )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header