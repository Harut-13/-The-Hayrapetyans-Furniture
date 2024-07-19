import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Order from "./Order";

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className="summa">Total: ${new Intl.NumberFormat().format(summa)}</p>
  </div>)
}

const showNothing = () => {
  return (<div className="empty">
    <h2>No goods</h2>
  </div>)
}

function Header(props) {
  const handleScrollDown = () => {
    window.scrollBy({
      top: 3999,
      behavior: 'smooth',
    });
  };
  const handleScrollDown2 = () => {
    window.scrollBy({
      top: 4200,
      behavior: 'smooth',
    });
  };
  const handleScrollDown3 = () => {
    window.scrollBy({
      top: 700,
      behavior: 'smooth',
    });
  };
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
      <div>
        <span className='logo'>
          THE HAYRAPETYANS <br />  Your Dream Furniture</span>
        <ul className="nav">
          <li onClick={handleScrollDown3}>Furniture</li>
          <li onClick={handleScrollDown}>  About us</li>
          <li onClick={handleScrollDown2}>Contacts</li>
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