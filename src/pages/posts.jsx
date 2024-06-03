import React from "react";

const comments = [
  {
    id: 1,
    user: "John Doe",
    text: "This is a fantastic product!",
    date: "01.02.2023",
    status: "Approved",
  },
  {
    id: 2,
    user: "Jane Smith",
    text: "I had a great experience with the customer service.",
    date: "02.02.2023",
    status: "Pending",
  },
  {
    id: 3,
    user: "Alice Johnson",
    text: "Not satisfied with the quality.",
    date: "03.02.2023",
    status: "Rejected",
  },
  {
    id: 4,
    user: "Bob Brown",
    text: "Delivery was quick and the item was well packaged.",
    date: "04.02.2023",
    status: "Approved",
  },
  {
    id: 5,
    user: "Charlie Davis",
    text: "The product did not meet my expectations.",
    date: "05.02.2023",
    status: "Pending",
  },
  {
    id: 6,
    user: "David Wilson",
    text: "Highly recommend this to everyone!",
    date: "06.02.2023",
    status: "Approved",
  },
  {
    id: 7,
    user: "Eva White",
    text: "Average experience, nothing special.",
    date: "07.02.2023",
    status: "Rejected",
  },
  {
    id: 8,
    user: "Frank Green",
    text: "Great value for money.",
    date: "08.02.2023",
    status: "Approved",
  },
  {
    id: 9,
    user: "Grace Lee",
    text: "I will definitely be buying again.",
    date: "09.02.2023",
    status: "Pending",
  },
  {
    id: 10,
    user: "Hank Miller",
    text: "The product arrived late.",
    date: "10.02.2023",
    status: "Rejected",
  },
];

const Posts = () => {
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
                Comment ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                User
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Comment
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
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {comments.map((comment) => (
              <tr key={comment.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {comment.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {comment.user}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {comment.text}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {comment.date}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                    comment.status === "Approved"
                      ? "text-green-600"
                      : comment.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {comment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Posts;
