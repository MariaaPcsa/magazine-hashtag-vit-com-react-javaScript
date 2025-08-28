import { catalog } from "../../utils/catalog";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ searchParams }) => {
  const filterParam = searchParams.get("filterby");

  return (
    <section className="container flex flex-wrap mx-auto p-10 justify-center gap-10">
      {(filterParam !== null
        ? catalog.filter((p) => p.feminine === (filterParam === "fem"))
        : catalog
      ).map((product) => (
        <ProductCard key={`product_${product.id}_key`} {...product} />
      ))}
    </section>
  );
};

export default ProductsContainer;

