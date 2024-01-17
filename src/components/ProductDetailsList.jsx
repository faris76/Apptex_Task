import { bestSellingProducts } from "../../data";
import ProductDetailListItem from "./ProductDetailListItem";

const ProductDetailsList = () => {
  return (
    <div className="flex flex-col px-2">
      <div className="flex gap-4 py-2">
        <div className="flex items-center justify-center bg-primary text-white px-2 py-1 xl:py-2 rounded-lg text-[9px] xl:text-xs ">
          Best Selling Products
        </div>
        <div className="flex items-center justify-center rounded-lg px-2 py-1 xl:py-2 text-[9px] xl:text-xs bg-white">
          Out of Stock
        </div>
      </div>
      <div className="flex flex-col">
        {bestSellingProducts.map((product) => (
          <ProductDetailListItem {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsList;
