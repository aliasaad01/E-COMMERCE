/* eslint-disable jsx-a11y/alt-text */
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md py-5">
      <div className="container mx-auto px-4">
        <div className="min-h-16">
          <div className="flex justify-between items-center flex-col md:flex-row py-10">
            <h2 className="text-white font-bold text-4xl">
              Subscribe Our Newsletter
            </h2>
            <form className="md:w-1/3 w-full mt-8 md:mt-0 relative">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="py-4 px-4 rounded shadow-md w-full"
              />
              <button className="bg-gray-300 py-3 px-4 rounded-full absolute right-3 top-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div>
              {/* <img src={logo} className="my-4" /> */}
              <Link to={"/"}>
                <h2 className="my-4 font-semibold text-2xl">AUDIOPHILE</h2>
              </Link>
              <p>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus eaque atque aliquid labore.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <Facebook
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
                <Twitter
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
                <Youtube
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
                <Instagram
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4">Pages</h2>
              <ul>
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
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4">Categories</h2>
              <ul>
                <li>
                  <Link to={"/"}>Monitors</Link>
                </li>
                <li>
                  <Link to={"/"}>GPUs</Link>
                </li>
                <li>
                  <Link to={"/"}>Laptops</Link>
                </li>
                <li>
                  <Link to={"/"}>Power Supply</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4">Pages</h2>
              <p>
                70 Washington Square South, New York, NY 10012, United States
              </p>
              <p>+12345 678 910</p>
              <p>+12345 678 109</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center py-4 text-white">
        <p>Copyright &copy; 2025.</p>
        <p>Created with love by Ali Asaad.</p>
      </div>
    </footer>
  );
}
