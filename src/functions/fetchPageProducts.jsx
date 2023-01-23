import React, { useEffect, useState } from "react";

export function fetchPageProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../src/data/products.json");
      let gotData = await response.json();
      let exportdata = await gotData[0];
      setData(exportdata);
    };
    fetchData();
  }, []);

  const { earphones, speakers, headphones } = data;
  return { earphones, speakers, headphones };
}
