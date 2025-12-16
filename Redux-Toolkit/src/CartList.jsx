import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAllItems, removeItem, updateQuantity } from "./redux/slice";

function CartList() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const manageQuantity = (id, value) => {
    const quantity = Math.max(1, Number(value) || 1);
    dispatch(updateQuantity({ id, quantity }));
  };

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);


    const handlePlaceOrder = () => {
      localStorage.removeItem("cartItems");
      dispatch(clearAllItems());
      alert("Order placed successfully!");
      navigate("/")
    }


  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Cart</h2>
      </div>

      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item info">
              <img src={item.image} alt={item.title} />

              {/* LEFT SIDE */}
              <div className="title-qty">
                <input
                  type="number"
                  min="1"
                  value={item.quantity ?? 1}
                  onChange={(e) => manageQuantity(item.id, e.target.value)}
                  className="qty-input"
                />
                <h3>{item.title}</h3>
              </div>

              {/* RIGHT SIDE */}
              <div className="item-action">
                <p className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="empty-cart">Your cart is empty</p>
      )}

      <div className="cart-footer">
        <button onClick={handlePlaceOrder} className="place-order-btn">Place Order</button>

        <div className="total-price">
          Total: <span>${totalPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default CartList;
