import React from "react";
import { topDealUsers } from "../utils/data";

const TopDeals = () => {
  return (
    <>
      <div className="text-white text-lg">TopDeals</div>
      {topDealUsers.map((item) => (
        <>
          <div className="mt-2 text-white flex justify-between" key={item.id}>
            <div className="flex items-center gap-2">
              <div>
                <img className="w-6 h-6 rounded-full " src={item.img} alt="" />
              </div>
              <div>
                <div className="text-[12px]">{item.username}</div>
                <div className="text-[10px]">{item.email}</div>
              </div>
            </div>
            <div className="text-xl">${item.amount}</div>
          </div>
        </>
      ))}
    </>
  );
};

export default TopDeals;
