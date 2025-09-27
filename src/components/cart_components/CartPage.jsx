import React, { useState } from "react";
import {Card,CardHeader,CardContent,CardFooter,} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, X } from "lucide-react";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const price = 299;
  const subtotal = price * quantity;

  return (
    <div className="m-5">
      <p className="flex items-center justify-center text-4xl font-bold text-blue-400">
        Cart
      </p>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <Card className="lg:col-span-2 shadow-md">
            {/* Header (hidden on small screens) */}
            <CardHeader className="border-b pb-4 hidden md:block">
              <div className="grid grid-cols-5 font-semibold text-gray-600">
                <p className="col-span-2">Product</p>
                <p className="text-center">Price</p>
                <p className="text-center">Quantity</p>
                <p className="text-right">Subtotal</p>
              </div>
            </CardHeader>

            <CardContent className="divide-y">
              {/* Product Row */}
              <div className="grid grid-cols-1 md:grid-cols-5 items-center py-4 gap-4">
                {/* Product */}
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="src/assets/mouse.webp"
                    alt="product"
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <p className="font-medium text-blue-900">
                    BeHeadphones1 - Aquamarine
                  </p>
                </div>

                {/* Price */}
                <p className="text-blue-600 md:text-center">${price}.00</p>

                {/* Quantity */}
                <div className="flex items-center md:justify-center">
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <Button variant="ghost" size="icon" onClick={decrease}>
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="px-4">{quantity}</span>
                    <Button variant="ghost" size="icon" onClick={increase}>
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Subtotal + Remove */}
                <div className="flex items-center justify-between md:justify-end gap-3">
                  <p className="text-blue-600 font-medium">${subtotal}.00</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-wrap items-center gap-4 pt-4">
              <input
                type="text"
                placeholder="Coupon code"
                className="border rounded-md px-4 py-2 max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Apply coupon
              </Button>
              <Button variant="outline" disabled>
                Update cart
              </Button>
            </CardFooter>
          </Card>

          {/* Right Section */}
          <Card className="shadow-md">
            <CardHeader>
              <h2 className="text-xl font-bold text-center">Cart totals</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span>${subtotal}.00</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${subtotal}.00</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                Proceed to checkout
              </Button>
              <Button variant="ghost" className="w-full text-gray-500">
                Continue shopping
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
