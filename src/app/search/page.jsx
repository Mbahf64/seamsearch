
"use client";

import React, { useState } from "react";
import Filter from "../search/filter";

const ResponsiveGrid = () => {
  const [file, setFile] = useState();
  const [fileEnter, setFileEnter] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setFileEnter(true);
  };

  const handleDragLeave = () => {
    setFileEnter(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFileEnter(false);
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          if (file) {
            let blobUrl = URL.createObjectURL(file);
            setFile(blobUrl);
          }
          console.log(`items file[${i}].name = ${file?.name}`);
        }
      });
    } else {
      [...e.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  };

  const handleFileChange = (e) => {
    console.log(e.target.files);
    let files = e.target.files;
    if (files && files[0]) {
      let blobUrl = URL.createObjectURL(files[0]);
      setFile(blobUrl);
    }
  };

  return (
    <div>
      <div className="flex flex-grow mx-6 lg:mx-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="flex flex-col items-center">
            <div
              className={`flex justify-center items-center rounded-2xl box-border w-full min-h-[343px] lg:min-h-[580px] 2xl:w-[580px] 2xl:ml-[258px]  overflow-hidden text-center ${
                fileEnter ? "border-4" : "border-2"
              } border-dashed border-[#C8CCD5] bg-inherit font-body-sub-heading-16-bold`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <label
                htmlFor="file"
                className="flex flex-col items-center justify-center gap-6"
              >
                {!file ? (
                  <>
                    <img
                      className="w-[114px] h-[99.8px]"
                      alt=""
                      src="/drag.png"
                    />
                    <div className="max-w-[300px] lg:w-[333px] leading-[140%] font-semibold inline-block">
                      <span>{`Drag and drop your image here or `}</span>
                      <span className="text-data-analysis-color03 cursor-pointer">{`Browse `}</span>
                      <span>to choose file.</span>
                    </div>
                    <div className="text-xs leading-[140%] font-medium text-gray-100">
                      PNG, JPG up to 50MB
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex justify-center items-center md:max-h-full object-cover">
                    <img
                      className="max-w-full max-h-full"
                      src={file}
                      alt="Uploaded preview"
                    />
                  </div>
                )}
              </label>
              <input
                id="file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            <div className="mt-4 w-full mb-6 ">
              <div className="flex flex-col items-center justify-start gap-[18px] text-xs text-[#84818A] 2xl:ml-[15rem]">
                <div className="relative leading-[140%] font-medium font-body-sub-heading-16-bold">
                  Or try on the examples below:
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="w-16 relative rounded-lg h-12 object-cover"
                    alt=""
                    src="/cream.png"
                  />
                  <img
                    className="w-16 relative rounded-lg h-12 object-cover"
                    alt=""
                    src="/wine.png"
                  />
                  <img
                    className="w-16 relative rounded-lg h-12 object-cover"
                    alt=""
                    src="/orange.png"
                  />
                  <img
                    className="w-16 relative rounded-lg h-12 object-cover"
                    alt=""
                    src="/sneakers.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:ml-[51px]">
            <Filter />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:justify-between px-6 lg:px-20 pt-[7rem] pb-4 font-body-sub-heading-16-bold text-[16px] text-[#84818A]">
        <div>© 2024 Seamsearch. All Rights Reserved.</div>
        <div className="flex gap-4">
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveGrid;
