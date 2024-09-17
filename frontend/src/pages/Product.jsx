import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import starIcon from "../assets/star_icon.png";
import starDull from "../assets/star_dull_icon.png";
import { formatPrice } from "../utils/utils";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState({});
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData.name ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image &&
              productData.image.map((item, index) => (
                <img
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  src={item}
                  alt={productData.name}
                  onClick={() => setImage(item)}
                />
              ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt={productData.name} />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-3 5" alt="" src={starIcon} />
            <img className="w-3 5" alt="" src={starIcon} />
            <img className="w-3 5" alt="" src={starIcon} />
            <img className="w-3 5" alt="" src={starIcon} />
            <img className="w-3 5" alt="" src={starDull} />
            <p className="p1-2">(145)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {formatPrice(productData.price)}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          {productData?.sizes && productData.sizes.length > 0 && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => {
                      setSize(item);
                    }}
                    className={`border py-2 px-4 bg-gray-100 ${
                      item === size ? "text-red" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
          {productData?.Custom && productData.Custom.length > 0 && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select Custom</p>
              <div className="flex gap-2">
                {productData.Custom.map((item, index) => (
                  <button className="border py-2 px-4 bg-gray-100" key={index}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
          {productData?.PrintPositioning &&
            productData.PrintPositioning.length > 0 && (
              <div className="flex flex-col gap-4 my-8">
                <p>Select printing position</p>
                <div className="flex gap-2">
                  {productData.PrintPositioning.map((item, index) => (
                    <button
                      className="border py-2 px-4 bg-gray-100"
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          {productData?.PrefferedPrintType &&
            productData.PrefferedPrintType.length > 0 && (
              <div className="flex flex-col gap-4 my-8">
                <p>Select print type</p>
                <div className="flex gap-2">
                  {productData.PrefferedPrintType.map((item, index) => (
                    <button
                      className="border py-2 px-4 bg-gray-100"
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          {productData?.Color && productData.Color.length > 0 && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select color</p>
              <div className="flex gap-2">
                {productData.Color.map((item, index) => (
                  <button className="border py-2 px-4 bg-gray-100" key={index}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
          {productData?.PrintPositioning &&
            productData.PrintPositioning.length > 0 && (
              <div className="flex flex-col gap-4 my-8">
                <p>Select print position</p>
                <div className="flex gap-2">
                  {productData.PrintPositioning.map((item, index) => (
                    <button
                      className="border py-2 px-4 bg-gray-100"
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          {productData?.papertype && productData.papertype.length > 0 && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select paper type</p>
              <div className="flex gap-2">
                {productData.papertype.map((item, index) => (
                  <button className="border py-2 px-4 bg-gray-100" key={index}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
          {productData?.finishtype && productData.finishtype.length > 0 && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select finish type</p>
              <div className="flex gap-2">
                {productData.finishtype.map((item, index) => (
                  <button className="border py-2 px-4 bg-gray-100" key={index}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
          {productData?.tobePrinted && productData.tobePrinted.length > 0 && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select print side</p>
              <div className="flex gap-2">
                {productData.tobePrinted.map((item, index) => (
                  <button className="border py-2 px-4 bg-gray-100" key={index}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
          {productData?.cornerfinish && productData.cornerfinish.length > 0 && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select corner finish</p>
              <div className="flex gap-2">
                {productData.cornerfinish.map((item, index) => (
                  <button className="border py-2 px-4 bg-gray-100" key={index}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
          {productData?.ExtraAddons && productData.ExtraAddons.length > 0 && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select addons</p>
              <div className="flex gap-2">
                {productData.ExtraAddons.map((item, index) => (
                  <button className="border py-2 px-4 bg-gray-100" key={index}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
          {productData?.PrefferedFabricMaterial &&
            productData.PrefferedFabricMaterial.length > 0 && (
              <div className="flex flex-col gap-4 my-8">
                <p>Select fabric material</p>
                <div className="flex gap-2">
                  {productData.PrefferedFabricMaterial.map((item, index) => (
                    <button
                      className="border py-2 px-4 bg-gray-100"
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          {productData?.Branded && productData.Branded.length > 0 && (
            <div className="flex flex-col gap-4 my-8">
              <p>branded? </p>
              <div className="flex gap-2">
                {productData.PrefferedFabricMaterial.map((item, index) => (
                  <button className="border py-2 px-4 bg-gray-100" key={index}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
          {productData?.SizeOfFlyers && productData.SizeOfFlyers.length > 0 && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select size of flyers </p>
              <div className="flex gap-2">
                {productData.SizeOfFlyers.map((item, index) => (
                  <button className="border py-2 px-4 bg-gray-100" key={index}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
          {productData?.FinishAndCoating &&
            productData.FinishAndCoating.length > 0 && (
              <div className="flex flex-col gap-4 my-8">
                <p>Select finishing and coating </p>
                <div className="flex gap-2">
                  {productData.FinishAndCoating.map((item, index) => (
                    <button
                      className="border py-2 px-4 bg-gray-100"
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          {productData?.SizeOfNotebook &&
            productData.SizeOfNotebook.length > 0 && (
              <div className="flex flex-col gap-4 my-8">
                <p>Select size of notebook </p>
                <div className="flex gap-2">
                  {productData.SizeOfNotebook.map((item, index) => (
                    <button
                      className="border py-2 px-4 bg-gray-100"
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3  text-sm">Description</b>
          <b className="boder px-5 py-3 text-sm">Review (122)</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>{productData.description}</p>
        </div>
      </div>
      <RelatedProducts category={productData.category}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
