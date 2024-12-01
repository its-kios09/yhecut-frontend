import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { currency } from "../App";
import { formatPrice } from "../util/usePriceFormat";
import { TrashCan } from "@carbon/icons-react";
import PropTypes from "prop-types";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/products/list`);
      console.log(response.data);

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

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/products/remove`,
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Product removed successfully");
        await fetchList();
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

  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* Header for the table */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* List items */}
        {list.length > 0 ? (
          list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-2 border rounded-md text-sm"
            >
              {/* Product Image */}
              <img
                src={item.images[0]}
                alt={item.name || "Product Image"}
                className="w-10 h-10 object-cover"
              />
              {/* Product Name */}
              <p>{item.name}</p>
              {/* Product Category */}
              <p>{item.category}</p>
              {/* Product Price */}
              <p>
                {currency}
                {formatPrice(item.price)}
              </p>
              {/* Action Button */}
              <div className="text-center">
                <TrashCan
                  className="cursor-pointer text-red-500 text-gray-500 hover:text-red-700 ml-20"
                  title="Delete Product"
                  style={{ color: "red" }}
                  onClick={() => removeProduct(item?._id)}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </>
  );
};
List.propTypes = {
  token: PropTypes.string.isRequired,
};

export default List;
