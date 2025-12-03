import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { setSelectedCategory } from "../features/products/ProductSlice";

const categories = [
  "All",
  "Graphic Cards",
  "Laptop",
  "Monitors",
  "Power Supply",
];

export default function Home() {
  const dispatch = useDispatch();

  const buttons = categories.map((cat) => {
    return (
      <button
        key={cat}
        className="bg-gray-300 py-2 px-4 rounded-md text-black active:scale-110 hover:bg-zinc-400 transition-all ease-in"
        onClick={() => dispatch(setSelectedCategory(cat))}
      >
        {cat}
      </button>
    );
  });

  return (
    <div>
      <div className="bg"></div>

      <div className="container mx-auto my-10 px-4">
        <div className="flex gap-4 flex-wrap">{buttons}</div>

        <ProductGrid />
      </div>

      <Footer />
    </div>
  );
}
