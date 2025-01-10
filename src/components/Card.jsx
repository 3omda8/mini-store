import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Card({ title, price, src, item }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="p-2 border-solid border-2 border-black rounded-xl bg-slate-200 grid grid-rows-[360px,auto,auto] max-h-fit max-w-full">
      <img
        src={src}
        alt="Product Image"
        className=" h-[100%] rounded-lg w-[100%] "
      />
      <p className="text-xl my-2 font-normal line-clamp-2">{title}</p>
      <div className="grid grid-rows-[auto,auto]">
        <p className="text-lg ml-1 font-bold h-5">{price}$</p>
        <button
          className="bg-green-500 text-white py-1 rounded-lg mt-4 h-8 hover:bg-green-600"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
