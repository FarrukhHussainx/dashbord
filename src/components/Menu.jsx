import React from "react";
import { menu } from "../utils/data";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div>
      <div>
        {menu.map((item) => (
          <>
            <div
              className="text-[10px] md:text-gray-500 ml-2 mt-3 uppercase"
              key={item.id}
            >
              {item.title}
            </div>
            {item.listItems.map((listItem) => (
              <Link to={listItem.url}>
                <div className="flex  gap-2  items-center text-xs ml-6 mt-3 ">
                  <img className="h-4 w-4" src={listItem.icon} alt="" />
                  <div
                    className="text-gray-600 md:text-white "
                    key={listItem.id}
                  >
                    {listItem.title}
                  </div>
                </div>
              </Link>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};
