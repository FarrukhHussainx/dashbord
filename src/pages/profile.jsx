import React from "react";

const profileData = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
  info: {
    username: "Johndoe99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
};

const Profile = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg flex">
        <div className="w-1/2 p-8">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {profileData.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
          <dl className="mt-5 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {profileData.info.fullname}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Username</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {profileData.info.username}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {profileData.info.email}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Phone number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {profileData.info.phone}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd
                className={`mt-1 text-sm ${
                  profileData.info.status === "verified"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {profileData.info.status}
              </dd>
            </div>
          </dl>
        </div>
        <div className="w-1/2">
          <img
            className="object-cover h-full w-full rounded-lg"
            src={profileData.img}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
