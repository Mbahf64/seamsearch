"use client"

import React, { useState } from "react";
import { products } from "../../data/products";

const ProductGrid = ({}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="flex flex-grow">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-6 lg:mx-20 absolute lg:left-[19rem]">
        {products.map((product, index) => (
          <div
            key={index}
            className={`relative rounded-2xl box-border h-full border-[px]  border-solid  w-full lg:w-full px-3 pt-3 ${
              selectedProduct === index
                ? "border-blue-500 border-[2px]"
                : "border-neutral-200 border-[1px]"
            }`}
          >
            <img
              className="rounded-2xl w-full h-[278px] object-cover "
              alt=""
              src={product.src}
              onClick={() => setSelectedProduct(index)}
            />
            {selectedProduct === index && (
              <button className="absolute bottom-[8rem] right-6 bg-[#5837FF] text-white p-[1rem] rounded-[2rem] cursor-pointer font-text-base-semibold">
                Visit Store
              </button>
            )}
            <div className="py-4">
              <div className="font-medium">{product.title}</div>
              <div className="inline-block mt-2">
                <span>{product.price}</span>
                <span className="text-xs text-neutral-80 line-through pl-1">
                  {product.oldPrice}
                </span>
              </div>
              <div className={`mt-2 text-xs font-semibold ${product.color}`}>
                {product.stock}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
