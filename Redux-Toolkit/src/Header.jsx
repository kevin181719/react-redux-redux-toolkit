import "./App.css";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";
function Header() {
  
  return (
    <header className="header">
      <h2 className="logo">MyShop</h2>

      <nav className="nav">
        <Link to="/">Home</Link>
      </nav>
      <AddToCart />
    </header>
  );
}

export default Header;
