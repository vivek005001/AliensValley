'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProduct } from '@/utils/Request';
import ProductHeaderImage from '@/components/ProductHeaderImage';
import Link from 'next/link';

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      if (!id) return;
      try {
        const product = await fetchProduct(id);
        setProduct(product);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    if (product === null) {
      fetchProductData();
    }
  }, [id, product]);

  if (!product && !loading) {
    return <h1 className='text-center text-2xl font-bold mt-10'>Product Not Found</h1>
  }

  return (
    <>
      {!loading && product && (
        <>
          {/* <ProductHeaderImage image={product.images[0]} /> Pass image filename */}

          


          <section className="bg-blue-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Product Image and Details */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  {/* Product Image (using Next.js Image component) */}
                  <div className="h-80 relative mb-4">
                    {/* <Image
                      src="/images/products/jeans1.jpg" // Example image path (replace with dynamic data)
                      alt="Product Image"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    /> */}
                  </div>
                  <div className="text-gray-500 mb-2">Jeans</div>
                  <h1 className="text-3xl font-bold mb-2">Classic Blue Jeans</h1>
                  <div className="text-gray-500 mb-4 flex items-center">
                    <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                    <p className="text-orange-700">Available in Various Sizes</p>
                  </div>

                  <h3 className="text-lg font-bold mb-4 bg-gray-800 text-white p-2 rounded-lg">
                    Price & Details
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-500 mr-2 font-bold">Price</div>
                    <div className="text-2xl font-bold">$59.99</div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-500 mr-2 font-bold">Type</div>
                    <div className="text-gray-700">Denim</div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-500 mr-2 font-bold">Description</div>
                    <div className="text-gray-700">
                      High-quality denim jeans with a classic blue wash.
                    </div>
                  </div>
                </div>

                {/* Similar Products Section */}
                <div className="col-span-2 md:col-span-1">
                  <h3 className="text-lg font-bold mb-4">Similar Products</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Product Card (Example, repeat for each product) */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="h-36 relative mb-2">
                        {/* <Image
                          src="/images/products/jeans2.jpg" // Example image path (replace with dynamic data)
                          alt="Product Image"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        /> */}
                      </div>
                      <div className="text-gray-500 mb-2">Jeans</div>
                      <h2 className="text-xl font-bold mb-2">Slim Fit Jeans</h2>
                      <div className="flex justify-between items-center">
                        <div className="text-gray-500 mr-2 font-bold">Price</div>
                        <div className="text-lg font-bold">$49.99</div>
                      </div>
                    </div>

                    {/* Repeat similar product cards for other products */}
                    {/* Example Product Card */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="h-36 relative mb-2">
                        {/* <Image
                          src="/images/products/shirt1.jpg" // Example image path (replace with dynamic data)
                          alt="Product Image"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        /> */}
                      </div>
                      <div className="text-gray-500 mb-2">Shirt</div>
                      <h2 className="text-xl font-bold mb-2">Casual Cotton Shirt</h2>
                      <div className="flex justify-between items-center">
                        <div className="text-gray-500 mr-2 font-bold">Price</div>
                        <div className="text-lg font-bold">$29.99</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='container m-auto p-6'>
              <Link
                href='/'
                className="text-blue-500 hover:text-blue-800 flex items-center"
              >
                <i className="fas fa-row-left mr-2"></i>Back to Products
              </Link>
            </div>
          </section>

        </>
      )}
    </>
  );
};

export default Products;
