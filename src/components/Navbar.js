/* eslint-disable jsx-a11y/alt-text */
import { ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../features/products/ProductSlice";
import { showItemsCount } from "../features/cart/cartSlice";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm);
  const cartItems = useSelector((state) => state.cart.items);

  const isLocal = JSON.parse(localStorage.getItem("cartItems"));

  const itemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    dispatch(showItemsCount(isLocal));
  }, []);

  return (
    <header className="bg-white text-center shadow-md">
      <>
        <div className="py-4 shadow-md">
          <ul className="container mx-auto flex flex-wrap justify-between items-center md:flex-row px-4 md:px-2 relative">
            <div className="flex gap-4">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>About</Link>
              </li>
              <li>
                <Link to={"/"}>FAQs</Link>
              </li>
              <li>
                <Link to={"/"}>Contact</Link>
              </li>
            </div>

            {isOpen ? (
              <div className="flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4">
                <li>
                  <Link to={"/"}>Sign</Link>
                </li>
                <li>
                  <Link to={"/"}>My Account</Link>
                </li>
              </div>
            ) : (
              ""
            )}

            <User
              size={32}
              className="bg-gray-200 text-black rounded cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </ul>
        </div>
      </>

      <nav className="flex justify-between items-center container mx-auto md:py-6 py-8 px-2">
        <div className="flex items-center">
          <Link to={"/"} className="py-2 px-4 rounded">
            <img src={logo} className="text-white" />
          </Link>
        </div>

        <form className="w-1/2 sm:block hidden">
          <input
            type="text"
            placeholder="Search Product"
            className="bg-zinc-100 rounded-md focus:outline-none py-3 px-3 w-full"
            style={{ border: "1px solid #d4d4d8" }}
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </form>

        <Link to={"/cart"} className="relative">
          <ShoppingCart
            size={54}
            className="cursor-pointer bg-gray-100 px-3 py-2 rounded-full"
          />
          {itemsCount > 0 && (
            <span className="absolute top-0.5 right-0.5 p-1 text-white bg-red-600 rounded-full size-6 flex justify-center items-center">
              {itemsCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
