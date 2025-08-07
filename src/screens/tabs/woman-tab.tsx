import React, { useEffect, useState } from "react";
import { ProductList } from "@/src/components/product-list/product-list";
import { api } from "@/src/services/api";

const womensCategories = [
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

export const WomanTab = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all(
      womensCategories.map(categoria =>
        api.get(`/products/category/${categoria}`).then(res => res.data.products)
      )
    )
      .then(results => {
        const allProducts = results.flat();
        setProducts(allProducts);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return <ProductList products={products} loading={loading} />;
};
