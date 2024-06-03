import React from "react";
import Table from "../components/Table";
import { userRows } from "../utils/data";

const Users = () => {
  return (
    <>
      <Table user={userRows} />
    </>
  );
};

export default Users;
