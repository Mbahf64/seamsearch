"use client"

import React, { useState } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import ProductGrid from "../Store/productGrid";
import Button from "@mui/joy/Button";

const Store = () => {
  return (
    <div className="w-[1200px] max-w-full  bg-neutral-10 text-gray-200 font-body-sub-heading-16-bold mb-[20px]">
      <div className="leading-[140%] text-gray-200 mx-6 lg:mx-20 pb-6 border-2 border-indigo-500">
        <span>Search Result for</span>
        <span className="font-semibold"> Uploaded Image</span>
      </div>
      <div className=" hidden max-w-full h-[1px] bg-[#E1E2E4]  mt-5 mb-[3rem] ml-[76px]"></div>
      <div className="hidden lg: absolute top-[230px] left-[76px] w-[204px] h-[385px] lg:flex flex-col items-center justify-start  text-xs text-gray-300 bg-[#F2F4F8] rounded-[8px]">
        <img
          className=" rounded-[16px] w-[188px] h-[170px] object-cover mt-2"
          alt=""
          src="/plane.jpg"
        />

        <div className=" pt-3 left-[0px] flex flex-col items-center justify-center gap-[12px]">
          <div className="w-[188px] relative h-10">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-[#E9EBF2] w-[188px] h-10" />
            <img
              className="absolute top-[12px] left-[164px] w-4 h-4 overflow-hidden object-contain"
              alt=""
              src="/chevron-down.png"
            />
            <div className="absolute top-[12px] left-[12px] leading-[140%] font-semibold">
              Filters
            </div>
          </div>
      

          <div className="w-[190px]">
            <FormControl>
              <FormLabel className="text-[8px]">Description</FormLabel>
              <Textarea placeholder="" minRows={2} />
            </FormControl>
          </div>
        </div>
        <Button className="mt-3.5 mb-4 -ml-8 rounded-lg bg-data-analysis-color03  py-[11px] px-[31px] text-[13px] text-neutral-10">
          Modify Search
        </Button>
      </div>

      <ProductGrid />
    </div>
  );
};

export default Store;
