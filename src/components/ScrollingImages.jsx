import React from "react";

const ScrollingImages = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-scroll">
        {/* Duplicate images for seamless effect */}
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex">
            {new Array(20).fill(null).map((_, i) => (
              <div key={i} className="w-[200px] flex-shrink-0 mx-2">
                <img src="/assets/logo.png" className="w-full" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingImages;
