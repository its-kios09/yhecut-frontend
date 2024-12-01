import { useState } from "react";
import upload from "../assets/upload_area.png";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Print");
  const [bestseller, setBestseller] = useState(false);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

  const handleColorChange = (e) => {
    const colors = e.target.value.split(",").map((c) => c.trim());
    setColor(colors);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("bestseller", bestseller);

      color.forEach((c) => formData.append("color[]", c));
      size.forEach((s) => formData.append("size[]", s));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/products/add",
        formData,
        {
          headers: {
            token,
          },
        }
      );
      console.log(response.data);

      if (response.data.success) {
        toast.success(response?.data?.message);
        setName("");
        setPrice("");
        setDescription("");
        setImage1("");
        setImage2("");
        setImage3("");
        setImage4("");
        setCategory("Print");
        setBestseller(false);
        setSize([]);
        setColor([]);
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to add product");
    }
  };

  return (
    <form
      className="flex flex-col w-full items-start gap-3"
      onSubmit={onSubmitHandler}
    >
      <div>
        <p className="mb-2">Upload images</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20"
              src={!image1 ? upload : URL.createObjectURL(image1)}
              alt=""
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20"
              src={!image2 ? upload : URL.createObjectURL(image2)}
              alt=""
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20"
              src={!image3 ? upload : URL.createObjectURL(image3)}
              alt=""
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20"
              src={!image4 ? upload : URL.createObjectURL(image4)}
              alt=""
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p>Product name</p>
        <input
          type="text"
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Your product name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="w-full">
        <p className="description">Product description</p>
        <textarea
          type="text"
          className="w-full max-w-[500px] px-1 py-1"
          placeholder="Your product description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Print">Print</option>
            <option value="Apparel">Apparel</option>
            <option value="CorpiorateUniforms">Corporate uniforms</option>
            <option value="Signage">Signage</option>
            <option value="PromoGiftItems">Promo & Gift Items</option>
            <option value="PrintingMachines">Printing Machines</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Product price</p>
          <input
            type="number"
            className="w-full px-3 py-2 sm:w-[120px]"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product Color</p>
        <input
          type="text"
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="(e.g., red, blue, yellow)"
          onChange={handleColorChange}
        />
      </div>
      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((sizeOption) => (
            <div
              key={sizeOption}
              onClick={() =>
                setSize((prev) =>
                  prev.includes(sizeOption)
                    ? prev.filter((item) => item !== sizeOption)
                    : [...prev, sizeOption]
                )
              }
            >
              <p
                className={`${
                  size.includes(sizeOption)
                    ? "bg-red text-white"
                    : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                {sizeOption}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          id="bestseller"
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to best seller
        </label>
      </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-red text-white">
        ADD
      </button>
    </form>
  );
};

Add.propTypes = {
  token: PropTypes.string.isRequired,
};
export default Add;
