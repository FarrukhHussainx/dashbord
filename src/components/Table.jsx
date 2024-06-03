import React from "react";
import { Link } from "react-router-dom";

const Table = (props) => {
  return (
    <div>
      <table class="table-fixed">
        <thead>
          <tr>
            <th>Song</th>
          </tr>
        </thead>
        <tbody>
          {props.user.map((item) => (
            <tr>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>
                <img className="w-6 h-6 rounded-full" src={item.img} alt="" />
              </td>
              <td>{item.phone}</td>
              <td>{item.verified ? "✔ " : "❌"}</td>
              <td>
                <Link to={{ pathname: "/other", state: item }}>
                  Go to Other Component
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
