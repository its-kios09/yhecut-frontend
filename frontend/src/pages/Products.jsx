import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown from "../assets/dropdown_icon.png";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Products = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev => [...prev, e.target.value])
    }
  };
  
  const applyFilter = () =>{
    let productsCopy = products.slice();

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    setFilterProducts(productsCopy);
  } 

  const sortProducts = () => {
     let fpCopy = filterProducts.slice();
     switch (sortType) {
       case "low-high":
         setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
         break;
       case "high-low":
         setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
         break;
       default:
        applyFilter();
         break;
     }
  }

  useEffect(() =>{
    setFilterProducts(products);
  },[]);

  useEffect(()=>{
      applyFilter();
  },[category]);

  useEffect(()=>{
    sortProducts();
  },[sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2 text-gray-600"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            src={dropdown}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt="Dropdown Icon"
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Print"}
                onChange={toggleCategory}
              />{" "}
              Print
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Apperal"}
                onChange={toggleCategory}
              />{" "}
              Apparel
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Corporate Uniform"}
                onChange={toggleCategory}
              />{" "}
              Cooperate uniforms
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"signage"}
                onChange={toggleCategory}
              />{" "}
              Signage
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Promo and Gifts"}
                onChange={toggleCategory}
              />
              Promo & Gift Item
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"All"} text2={"Products"} />
          <select className="bg-white text-gray-700 text-sm px-2 focus:outline-none" onChange={(e)=>setSortType(e.target.value)}>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md: grid-cols-3 lg: grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
