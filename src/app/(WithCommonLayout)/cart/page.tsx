import CartProducts from "@/components/modules/cart/CartProducts";
import Coupon from "@/components/modules/cart/Coupon";
import ProductBanner from "@/components/modules/products/banner";

const CartPage = () => {
  return (
    <div className="container mx-auto my-10">
      <ProductBanner title="Cart Page" path="Home - Cart" />
      <div className="grid grid-cols-12 p-7 items-center justify-center gap-8 my-5">
        <CartProducts />
        <Coupon />
      </div>
    </div>
  );
};

export default CartPage;
