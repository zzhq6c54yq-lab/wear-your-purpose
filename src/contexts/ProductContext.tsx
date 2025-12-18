import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { products as staticProducts, Product } from "@/data/products";

export interface CustomProduct extends Omit<Product, 'id'> {
  id: number;
  isCustom: true;
}

interface ProductContextType {
  allProducts: Product[];
  customProducts: CustomProduct[];
  addProduct: (product: Omit<CustomProduct, 'id' | 'isCustom'>) => void;
  removeProduct: (id: number) => void;
  clearCustomProducts: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const STORAGE_KEY = "thrive-custom-products";

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customProducts, setCustomProducts] = useState<CustomProduct[]>([]);

  // Load custom products from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setCustomProducts(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to load custom products:", e);
      }
    }
  }, []);

  // Save to localStorage whenever customProducts change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customProducts));
  }, [customProducts]);

  const addProduct = (product: Omit<CustomProduct, 'id' | 'isCustom'>) => {
    const newId = Date.now(); // Unique ID based on timestamp
    const newProduct: CustomProduct = {
      ...product,
      id: newId,
      isCustom: true,
    };
    setCustomProducts(prev => [...prev, newProduct]);
  };

  const removeProduct = (id: number) => {
    setCustomProducts(prev => prev.filter(p => p.id !== id));
  };

  const clearCustomProducts = () => {
    setCustomProducts([]);
  };

  // Merge static and custom products
  const allProducts = [...staticProducts, ...customProducts];

  return (
    <ProductContext.Provider value={{
      allProducts,
      customProducts,
      addProduct,
      removeProduct,
      clearCustomProducts,
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
