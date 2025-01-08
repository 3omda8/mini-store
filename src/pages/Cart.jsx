import { Link } from "react-router-dom";
function Cart() {
  return (
    <>
      <Link to="/">
        <button className="text-cyan-600 hover:text-cyan-300">
          &lt;--- Back to home
        </button>
      </Link>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-6xl">Working On it....</h1>
      </div>
    </>
  );
}

export default Cart;
