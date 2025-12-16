import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector.length);

  return (
    <div className="cart">
      <Link to="/cart"> 
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="cart-count">
          {cartSelector.length ? cartSelector.length : 0}
        </span>
      </Link>
    </div>
  );
};

export default AddToCart;
