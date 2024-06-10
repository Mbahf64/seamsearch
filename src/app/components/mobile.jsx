"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Dialog, DialogPanel, Disclosure, Popover, Transition } from "@headlessui/react";
const mobile = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      
      <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#ffffff] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-[20px] font-bold text-[#1d1e1e]">
                  Wingstay
                </span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  className="h-6 w-6 text-[#1d1e1e]"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
       
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#1d1e1e] hover:bg-gray-100"
                  >
                    Holiday Package
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#1d1e1e] hover:bg-gray-100"
                  >
                    Flight Schedule
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#1d1e1e] hover:bg-gray-100"
                  >
                    Account Settings
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#1d1e1e] hover:bg-gray-100"
                  >
                    Manage Booking
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#1d1e1e] hover:bg-gray-100"
                  >
                  Sign Up
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#1d1e1e] hover:bg-gray-100"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
    </div>
  )
}

export default mobile

