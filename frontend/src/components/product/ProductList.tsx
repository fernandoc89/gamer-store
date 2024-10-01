"use client";
import { products } from "@/core";
// import useProdutos from "@/data/hooks/useProdutos"
import ItemProduct from "./ItemProduct";
import ProductNotFound from "./ProductNotFound";

export default function ProductList() {
  // const { produtos } = useProdutos()
  return products.length ? (
    <div
      className="
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
            "
    >
      {products.map((product) => (
        <ItemProduct product={product} key={product.id} />
      ))}
    </div>
  ) : (
    <ProductNotFound withoutBackButton />
  );
}
