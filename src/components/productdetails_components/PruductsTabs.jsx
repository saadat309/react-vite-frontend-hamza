import React from "react";
import Description from "./description";
import AddInfo from "./AddInfo";
import Reviews from "./Reviews";

const ProductTabs = () => {
  return (
    <div>
        <div className="flex justify-center items-center gap-6 text-lg">
            <p>Description</p>
            <p>Additional Information</p>
            <p>Reviews</p>
        </div>
        <div>
            {/* <Description/> */}
        </div>
        <div>
            {/* < AddInfo/> */}
        </div>
        <div>
            <Reviews/>
        </div>
       
    </div>
  );
};

export default ProductTabs;
