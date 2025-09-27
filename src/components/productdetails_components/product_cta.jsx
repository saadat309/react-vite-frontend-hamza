"use client";
import React, { useState } from "react";
import {
  Star,
  ShieldCheck,
  Gift,
  Award,
  ShoppingBag,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

const ProductCta = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <>
      <div className="mt-15  flex flex-col">
        <div>
          <p className="text-black text-3xl font-bold">
            Catch 22 - Gold Edition
          </p>
          <div className="flex mt-4 items-center">
            <Star size={18} strokeWidth={1} />
            <Star size={18} strokeWidth={1} />
            <Star size={18} strokeWidth={1} />
            <Star size={18} strokeWidth={1} />
            <Star size={18} strokeWidth={1} />
            <div className="ml-2">
              <p>36 Reviews</p>
            </div>
          </div>
          <p className="text-lg">Poetic Range</p>
        </div>

        {/* Format Buttons */}
        <div className="flex flex-col gap-3">
          <p className="text-black text-xl font-bold mt-2">Format</p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="py-5 text-[15px] active:border-black active:text-black"
            >
              Perfume Spray (50ml)
            </Button>
            <Button
              variant="outline"
              className="py-5 text-[15px] active:border-black active:text-black"
            >
              Perfume Spray (150ml)
            </Button>
          </div>
        </div>
        <div className="mt-3">
          <p className="font-bold text-xl">Price </p>
          <p className="text-red-400 text-2xl">Rs.1550</p>
        </div>
        {/* Quantity + Counter */}
        <div className="mt-3">
          <p className="font-bold text-xl mb-2">Quantity</p>
          <div className="flex items-center border border-black  w-fit overflow-hidden">
            <button
              onClick={decrement}
              className="px-2 py-1 text-lg font-bold hover:bg-gray-200"
            >
              -
            </button>

            <span className="px-6 text-lg font-semibold">{count}</span>

            <button
              onClick={increment}
              className="px-2 py-1 text-lg font-bold hover:bg-gray-200"
            >
              +
            </button>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex">
            <ShieldCheck />
            <p>15 Days Easy Returns</p>
          </div>
          <div className="flex">
            <Gift />
            <p>Surprise in Every Order</p>
          </div>
          <div className="flex">
            <Award />
            <p>Award Winning Fragrance Brand</p>
          </div>
        </div>
        <div>
          <p className="text-black font-bold text-xl">Is It a Gift?</p>
          <Dialog>
            <DialogTrigger asChild>
              <Switch className="h-6 w-10 bg-black" />
            </DialogTrigger>
            <DialogContent className="w-[640px] h-[400px] max-w-[800px] sm:max-w-[800px]">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold">
                  Select A Gift Item?
                </DialogTitle>
              </DialogHeader>
              <DialogDescription>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center border rounded-xl pt-8 pb-5 px-9">
                    <Gift size={110} strokeWidth={1} className="text-red-700" />
                    <p className="text-lg text-black font-bold">Gift Wrap</p>
                    <Button className="bg-white text-black font-bold text-[14px] border rounded-xl hover:bg-transparent hover:text-inherit px-10 mt-2">
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-col items-center border rounded-xl pt-8 pb-5 px-9">
                    <ShoppingBag
                      size={110}
                      strokeWidth={1}
                      className="text-red-600"
                    />
                    <p className="text-lg text-black font-bold">Gift Pack</p>
                    <Button className="bg-white text-black font-bold text-[14px] border rounded-xl hover:bg-transparent hover:text-inherit px-10 mt-2">
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-col items-center border rounded-xl pt-8 pb-5 px-9">
                    <WalletCards
                      size={110}
                      strokeWidth={1}
                      className="text-red-700"
                    />
                    <p className="text-lg text-black font-bold">Gift Cards</p>
                    <Button className="bg-white text-black font-bold text-[14px] border rounded-xl hover:bg-transparent hover:text-inherit px-10 mt-2">
                      Add
                    </Button>
                  </div>
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
        <div>
            <p className="mt-2">Tax included. Shipping calculated at checkout.</p>
        </div>
        <div>
            <Button className="bg-red-500  mt-5 px-35 py-5 text-xl font-bold rounded-2xl">Add To Cart</Button>
        </div>
      </div>
    </>
  );
};

export default ProductCta;
