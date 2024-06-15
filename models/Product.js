import { Schema,model,models } from "mongoose";

const ProductSchema = new Schema({
    productID:{
        type: Schema.Types.ObjectId,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
      
    },
    images:[{
        type: String,
    }],
    is_featured:{
        type: Boolean,
        default: false,
    },
},{
    timestamps: true,
});

const Product = models.Product || model('Product',ProductSchema);

export default Product;

