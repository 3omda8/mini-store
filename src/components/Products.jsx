import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import Card from "./Card";
import Subnav from "./Subnav";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { searchQuery } = useContext(SearchContext);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products);
    } else {
      const searched = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(searched);
    }
  }, [searchQuery, products]);

  if (loading) {
    return (
      <div className=" flex items-center justify-center h-screen bg-gray-400">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Subnav onFilter={handleFilter} />
      </div>
      <div className="grid grid-cols-[44%,44%] justify-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 p-4">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            src={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
