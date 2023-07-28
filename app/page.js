"use client";
import { useState, useEffect, useMemo } from "react";
import { Banner } from "@/components/Blocks/Home/Banner";
import { Products } from "@/components/Blocks/Products/Products";
import { getCategories, getProducts } from "@/utils/apis/product";
import { Toaster } from "react-hot-toast";
import useDebounce from "@/utils/hooks/useDebounce";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const debounceSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    getCategories(setCategories);
    getProducts(setProducts, setLoading);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products;
    if (debounceSearchTerm) {
      result = result.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(debounceSearchTerm.toLowerCase());
      });
    }
    if (selectedCategory) {
      if (selectedCategory === "All") return result;
      result = result.filter((product) => {
        return product.category === selectedCategory;
      });
    }
    return result;
  }, [debounceSearchTerm, selectedCategory, products]);

  return (
    <main>
      <Banner
        category={categories}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Products
        products={filteredProducts}
        loading={loading}
        selectedCategory={selectedCategory}
      />
      <Toaster />
    </main>
  );
}
