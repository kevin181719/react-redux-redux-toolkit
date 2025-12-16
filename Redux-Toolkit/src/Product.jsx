import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/productSlice";
import { addItem, removeItem } from "./redux/slice";

function Product() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <h2>Loading products...</h2>;
  if (status === "failed") return <h2>Failed to load products</h2>;

  return (
    <div className="grid">
      {items.map((item) => {
        const inCart = cartItems.find((cartItem) => cartItem.id === item.id);

        return (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="containt">
              <div className="title">{item.title}</div>
              <div className="price">${item.price}</div>
              <div className="description">{item.description}</div>
              <div className="category">{item.category}</div>
              <div className="rating">{item.rating.rate}</div>

              {inCart ? (
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="btn-cartd"
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  onClick={() => dispatch(addItem(item))}
                  className="btn-cart"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
