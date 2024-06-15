import connectDB from "@/config/database";
import Product from "@/models/Product";

export const GET = async (request) => {
    try {
        await connectDB();
        
        const products = await Product.find({});

        return new Response(JSON.stringify(products), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response('Internal Server Error', { status: 500 })
    }
}