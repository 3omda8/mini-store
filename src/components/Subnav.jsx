function Subnav({ onFilter }) {
  return (
    <div>
      <ul className="flex justify-around text-xl bg-slate-400 text-white">
        <li
          onClick={() => onFilter("All")}
          className="hover:bg-slate-500 p-2 px-12 cursor-pointer md:px-20 lg:px-28"
        >
          All
        </li>

        <li
          onClick={() => onFilter("men's clothing")}
          className="hover:bg-slate-500 p-2 px-12 cursor-pointer md:px-20 lg:px-28"
        >
          Men
        </li>
        <li
          onClick={() => onFilter("women's clothing")}
          className="hover:bg-slate-500 p-2 px-12 cursor-pointer md:px-20 lg:px-28"
        >
          Women
        </li>
        <li
          onClick={() => onFilter("jewelery")}
          className="hover:bg-slate-500 p-2 px-12 cursor-pointer md:px-20 lg:px-28"
        >
          Jewelery
        </li>
        <li
          onClick={() => onFilter("electronics")}
          className="hover:bg-slate-500 p-2 px-12 cursor-pointer md:px-20 lg:px-28"
        >
          Electronics
        </li>
      </ul>
    </div>
  );
}

export default Subnav;
