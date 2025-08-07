import React, { useEffect, useState } from "react";
import { ProductList } from "@/src/components/product-list/product-list";
import { api } from "@/src/services/api";

const mensCategories = [
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
];

export const MenTab = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all(
      mensCategories.map(category =>
        api.get(`/products/category/${category}`).then(res => res.data.products)
      )
    )
      .then(results => {
        const allProducts = results.flat();
        setProducts(allProducts);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return <ProductList products={products} loading={loading} />;
};
