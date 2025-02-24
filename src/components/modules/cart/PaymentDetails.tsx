"use client";

import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
  grandTotalSelector,
  orderSelect,
  shippingCostSelector,
  subTotalSelector,
} from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";

export default function PaymentDetails() {
  const subtotal = useAppSelector(subTotalSelector);
  const shipingCost = useAppSelector(shippingCostSelector);
  const order = useAppSelector(orderSelect);
  const grandTOtal = useAppSelector(grandTotalSelector);

  const handelOrder = () => {
    console.log(order);
  };

  return (
    <div className="border-2   rounded-md mt-7 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold"> {currencyFormatter(subtotal)} </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Discount</p>
          <p className="font-semibold">00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipment Cost</p>
          <p className="font-semibold"> {currencyFormatter(shipingCost)} </p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold">{currencyFormatter(grandTOtal)} </p>
      </div>
      <Button
        onClick={handelOrder}
        className="w-full text-xl font-semibold py-5"
      >
        Order Now
      </Button>
    </div>
  );
}
