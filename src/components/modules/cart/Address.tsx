"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cities } from "@/contants/cities";
import {
  citySelector,
  shippingAddressSelector,
  updateCity,
  updateShippingAddress,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Address() {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector(citySelector);
  const shippingAddress = useAppSelector(shippingAddressSelector);

  const handleCitySelect = (city: string) => {
    dispatch(updateCity(city));
  };

  const handleShippingAddress = (address: string) => {
    dispatch(updateShippingAddress(address));
    console.log(shippingAddress);
    console.log(selectedCity);
  };

  return (
    <div className="border-2 mt-2 bg-background brightness-105 rounded-md col-span-4  p-5 ">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold">Address</h1>
        <p className="text-gray-500">Enter your address.</p>
        <div className="mt-5">
          <Select onValueChange={(city) => handleCitySelect(city)}>
            <SelectTrigger className="mb-5">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <textarea
            className="border w-full"
            onChange={(e) => handleShippingAddress(e.target.value)}
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}
