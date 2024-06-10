import React, { useState } from 'react';

const YourComponent = () => {
  const [selectedProduct, setSelectedProduct] = useState<number>(null); // assuming selectedProduct is supposed to be a number

  const handleClick = (index: number) => {
    setSelectedProduct(index);
  };

  return (
    <div>
      {yourProductArray.map((product, index) => (
        <img
          key={index}
          alt=""
          src={product.src}
          onClick={() => handleClick(index)}
        />
      ))}
      {selectedProduct !== null && (
        <button className="absolute bottom-[9rem] right-8 bg-[#5837FF] text-white p-[1rem] rounded-[2rem] cursor-pointer font-text-base-semibold">
          Your Button Content
        </button>
      )}
    </div>
  );
};

export default YourComponent;
