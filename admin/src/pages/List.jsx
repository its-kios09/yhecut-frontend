import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const List = () => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/products/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      console.error(e);
      toast.error(e.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return <div></div>;
};

export default List;
