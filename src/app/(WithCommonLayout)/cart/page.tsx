import Address from "@/components/modules/cart/Address";
import CartProducts from "@/components/modules/cart/CartProducts";
import Coupon from "@/components/modules/cart/Coupon";
import PaymentDetails from "@/components/modules/cart/PaymentDetails";
import ProductBanner from "@/components/modules/products/banner";

const CartPage = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <ProductBanner title="Cart Page" path="Home - Cart" />
      <div className="grid grid-cols-1 md:grid-cols-12 md:p-7 p-2  justify-center gap-8 my-5">
        <div className="col-span-8 w-full">
          <CartProducts />
        </div>
        <div className=" md:col-span-4 col-span-8 w-full">
          <Coupon />
          <Address/>
          <PaymentDetails/>
        </div>
        
      </div>
    </div>
  );
};

export default CartPage;
