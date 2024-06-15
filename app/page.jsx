'use client';  // Only needed if using experimental features in Next.js

import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { fetchProducts } from '@/utils/Request';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.productID} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
