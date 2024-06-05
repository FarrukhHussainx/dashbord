import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="">
      <h1 className="text-white text-lg">Leads by Source</h1>
      <div className="">
        <ResponsiveContainer width="99%" height={250}>
          <PieChart>
            <Tooltip
              contentStyle={{
                background: "#2a3447",
                borderRadius: "5px",
                color: "#ffffff",
              }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex text-xs text-white gap-2">
        {data.map((item) => (
          <>
            <div className="" key={item.name}>
              <div className=" flex items-center  gap-1">
                <div
                  className="w-2 h-2 rounded-full "
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.name}</span>
              </div>
              <span className="ml-3">{item.value}</span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
