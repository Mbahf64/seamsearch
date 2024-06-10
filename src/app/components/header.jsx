"use client";
import * as React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[25px] lg:pb-[55px] box-border max-w-full">
      <header className="w-[1200px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-base text-neutral-100 font-body-sub-heading-16-bold">
        <div className="w-[181px] flex flex-col items-start justify-start pt-1.5 pb-0 pr-[5px] pl-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-[66px] w-[183px] relative object-cover"
              loading="lazy"
              alt=""
              src="logo.png"
            />
          </div>
        </div>

        <div className=" hidden lg:flex w-[230px]  flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border mq750:w-0">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:hidden">
            <Link
              className="relative leading-[26px] font-medium no-underline text-neutral-100"
              href="/"
            >
              Home
            </Link>
            <Link
              className="relative leading-[26px] font-medium no-underline text-neutral-100"
              href="/"
            >
              How to Use
            </Link>
            <Link
              className="relative leading-[26px] font-medium no-underline text-neutral-100"
              href="/"
            >
              FAQ
            </Link>
          </div>
        </div>

        <div className=" hidden w-[261px] lg:flex flex-row items-start justify-start gap-[16px] font-text-base-semibold">
          <div className="w-[90px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
            <Link
              className="relative leading-[26px] font-semibold no-underline text-neutral-100"
              href="/"
            >
              Contact us
            </Link>
          </div>
          <div className="py-4 px-[23px] bg-[transparent]  rounded-81xl border-[1px] border-solid border-neutral-30">
            <Link
              className="relative leading-[26px] font-semibold no-underline text-neutral-100"
              rel="stylesheet"
              href="/search"
            >
              New Search
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
