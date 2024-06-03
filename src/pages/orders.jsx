import React from "react";

const orders = [
  {
    id: 1,
    customerName: "John Doe",
    product: "Playstation 5 Digital Edition",
    date: "01.02.2023",
    amount: "$250.99",
    status: "Shipped",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    product: "Dell Laptop KR211822",
    date: "02.02.2023",
    amount: "$499.99",
    status: "Processing",
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    product: "Samsung TV 4K SmartTV",
    date: "03.02.2023",
    amount: "$999.49",
    status: "Delivered",
  },
  {
    id: 4,
    customerName: "Bob Brown",
    product: "Apple Iphone 14 Pro Max",
    date: "04.02.2023",
    amount: "$799.49",
    status: "Cancelled",
  },
  {
    id: 5,
    customerName: "Charlie Davis",
    product: "Philips Hue Play Gradient",
    date: "05.02.2023",
    amount: "$39.99",
    status: "Processing",
  },
  {
    id: 6,
    customerName: "David Wilson",
    product: "Logitech MX Master 3",
    date: "06.02.2023",
    amount: "$59.49",
    status: "Delivered",
  },
  {
    id: 7,
    customerName: "Eva White",
    product: "Rode Podcast Microphone",
    date: "07.02.2023",
    amount: "$119.49",
    status: "Shipped",
  },
  {
    id: 8,
    customerName: "Frank Green",
    product: "Toshiba Split AC 2",
    date: "08.02.2023",
    amount: "$899.99",
    status: "Delivered",
  },
  {
    id: 9,
    customerName: "Grace Lee",
    product: "Sony Bravia KDL-47W805A",
    date: "09.02.2023",
    amount: "$970.49",
    status: "Cancelled",
  },
  {
    id: 10,
    customerName: "Hank Miller",
    product: "Acer Laptop 16 KL-4804",
    date: "10.02.2023",
    amount: "$599.99",
    status: "Shipped",
  },
];

const Orders = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Customer Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Product
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.customerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.product}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.amount}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                    order.status === "Delivered"
                      ? "text-green-600"
                      : order.status === "Shipped"
                      ? "text-blue-600"
                      : order.status === "Processing"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
