"use client"
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const SuccessPage = () => {
  const {tran_id} = useParams()
  console.log(tran_id)
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 text-center">
        <CheckCircleIcon className="w-24 h-24 text-green-500 mx-auto" />
        <h2 className="text-2xl font-semibold text-gray-800 mt-5">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mt-2">
          Thank you for your purchase. Your transaction has been completed
          successfully.
        </p>
        <h1 className="text-teal-600 font-medium ">Transection Id: {tran_id}</h1>
        <div className="mt-6">
          <Link href="/products" legacyBehavior>
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
