import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash2, X } from "lucide-react";

const CartCard = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      {/* Header */}
      <CardHeader className="flex items-center justify-between border-b pb-4">
        {/* Cross icon (left) */}
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 hover:text-red-500"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-900">Cart</h2>

        {/* Spacer for alignment */}
        <div className="w-5 h-5"></div>
      </CardHeader>

      {/* Item */}
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          {/* Product info */}
          <div className="flex items-center gap-4">
            <img
              src="src/assets/mouse.webp"
              alt="product"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="font-medium text-blue-900">
                BeHeadphones1 - Aquamarine
              </p>
              <p className="text-sm text-gray-500">
                Price: <span className="text-blue-600">$299.00</span>
              </p>
            </div>
          </div>

          {/* Price */}
          <p className="font-semibold text-blue-600">${299 * quantity}.00</p>
        </div>

        {/* Quantity + Remove */}
        <div className="flex items-center justify-between">
          <div className="flex items-center border rounded-md overflow-hidden">
            <Button variant="ghost" size="icon" onClick={decrease}>
              -
            </Button>
            <span className="px-4">{quantity}</span>
            <Button variant="ghost" size="icon" onClick={increase}>
              +
            </Button>
          </div>
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-red-500"
          >
            <Trash2 className="w-4 h-4" /> Remove
          </Button>
        </div>
      </CardContent>

      <Separator />

      {/* Footer */}
      <CardFooter className="flex flex-col gap-4">
        {/* Apply Coupon Section */}
        <div className="w-full">
          {!showCoupon ? (
            <button
              onClick={() => setShowCoupon(true)}
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Apply coupon code
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              <textarea
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                className="w-full border rounded-md p-2 text-sm resize-none"
              />
              <Button
                variant="outline"
                onClick={() => {
                  // later you can add coupon apply logic here
                  console.log("Coupon applied:", coupon);
                }}
                className="flex items-center justify-center gap-2 text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                <span>+</span> Apply
              </Button>
            </div>
          )}
        </div>

        {/* Subtotal & Total */}
        <div className="w-full">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal:</span>
            <span>${299 * quantity}.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${299 * quantity}.00</span>
          </div>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
          Proceed to checkout
        </Button>

        <Button variant="ghost" className="w-full text-gray-500">
          View cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartCard;
