import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";
export default function Navbar() {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="bg-gray-800 p-4 grid grid-cols-[auto,auto,auto] justify-between gap-2">
      <Link to="/" className="text-3xl font-bold text-yellow-400">
        Store-Logo
      </Link>
      <input
        type="text"
        placeholder="Search..."
        className="h-10 rounded-lg p-4 text-lg md:pr-24 lg:pr-40 xl:pr-56"
        name="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-2 gap-2 ">
        <Link
          to="/login"
          className="bg-green-500 px-2 sm:px-6 rounded-lg font-medium hover:bg-green-700"
        >
          <button className="flex items-center justify-center w-full h-full py-2">
            Login
          </button>
        </Link>
        <Link to="/cart" className="flex justify-center items-center">
          <button className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faCartPlus}
              size="2xl"
              style={{ color: "#909cb2" }}
            />
          </button>
          {cartItems.length > 0 && (
            <span className=" absolute ml-8 mb-10 bg-red-500 text-white text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
