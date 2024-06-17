import ProductHeaderImage from './ProductHeaderImage';

const ProductDetails = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className=" relative mb-4">
        <ProductHeaderImage image={product.images[0]} />
      </div>
      <div className="text-gray-500 mb-2">{product.category}</div>
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <div className="text-gray-500 mb-4 flex items-center">
        <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
        <p className="text-orange-700">Available in Various Sizes</p>
      </div>

      <h3 className="text-lg font-bold mb-4 bg-gray-800 text-white p-2 rounded-lg">
        Price & Details
      </h3>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500 mr-2 font-bold">Price</div>
        <div className="text-2xl font-bold">${product.price}</div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500 mr-2 font-bold">Type</div>
        <div className="text-gray-700">{product.type}</div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500 mr-2 font-bold">Description</div>
        <div className="text-gray-700">
          {product.description}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
