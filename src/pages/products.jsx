import React, { useEffect, useState } from "react";

const Products = () => {
  const [color, setColor] = useState();

  const getPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const movies = await response.json();
    setColor(movies);
  };

  useEffect(() => {
    getPost();
  }, []);

  console.log(color);

  return <></>;
};

export default Products;
