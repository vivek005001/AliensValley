import Link from 'next/link';
import Image from 'next/image';
import ProductHeaderImage from './ProductHeaderImage';

const ProductCard = ({ product }) => {
  // Ensure price is a number and not undefined
  const formattedPrice = product.price ? product.price.toFixed(2) : '0.00';

  return (
    <div className="border rounded-md shadow-md p-4">
      <Link href={`/images/products/${product.productID}`}>
        
          <div className="relative w-96">
            {/* <Image
              src={product.images[0]} 
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            /> */}
                    <ProductHeaderImage image={product.images[0]} />

          </div>
          
          <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
          <p className="mt-1 text-sm text-gray-600">{product.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-gray-900 font-bold">${formattedPrice}</span>
            <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
              Add to Cart
            </button>
          </div>
        
      </Link>
    </div>
  );
};

export default ProductCard;
