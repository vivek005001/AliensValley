const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//fetch all products
const fetchProducts = async () => {
    try {

        if (!apiDomain) {
            return [];
        }
      const res = await fetch(`${apiDomain}/products`);
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      return res.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
//fetch single product

const fetchProduct = async (id) => {
    try {

        if (!apiDomain) {
            return null;
        }
      const res = await fetch(`${apiDomain}/products/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      return res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  export { fetchProducts, fetchProduct};