import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { SearchProvider } from "../context/SearchContext";

function Home() {
  return (
    <SearchProvider>
      <div className="grid grid-rows-[auto,1fr]">
        <Navbar />
        <main className="bg-gray-300 h-full min-h-screen">
          <Products />
        </main>
      </div>
    </SearchProvider>
  );
}

export default Home;
