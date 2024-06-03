import React from "react";
import TopDeals from "../components/TopDeals";
import ChartBox from "../components/ChartBox";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../utils/data";
import BarChartBox from "../components/BarChartBox";
import PieChartBox from "../components/PieChatBox";
import BigChartBox from "../components/BigChart";

export const Home = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2 m-2 ">
      <div className="border border-gray-500 md:h-84 p-3 rounded-lg row-span-3 ">
        <TopDeals />
      </div>
      <div className="border border-gray-500 md:h-28 p-3 rounded-lg ">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="border border-gray-500 md:h-28 p-3 rounded-lg ">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="border border-gray-500 md:h-84 p-3 rounded-lg row-span-3 ">
        <PieChartBox />
      </div>
      <div className="border border-gray-500 md:h-28 p-3 rounded-lg  ">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="border border-gray-500 md:h-28 p-3 rounded-lg  ">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="border border-gray-500 md:p-3 h-56 rounded-lg row-span-2 md:col-span-2 ">
        <BigChartBox />
      </div>
      <div className="border border-gray-500 md:p-3 h-28 rounded-lg ">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
      <div className="border border-gray-500 md:p-3 h-28 rounded-lg ">
        <BarChartBox {...barChartBoxVisit} />
      </div>
    </div>
  );
};
