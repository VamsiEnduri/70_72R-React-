import React, { useEffect, useState } from "react";
import "./Product.css"; // Make sure to create this CSS

const Products = () => {
  const [data, setData] = useState([]);
  const [cats, setCats] = useState([]);
  const [filData, setFilData] = useState([]);

  useEffect(() => {
    async function apiCalling() {
      let res1 = await fetch("https://fakestoreapi.com/products");
      let res2 = await res1.json();
      setData(res2);
      setFilData(res2)
      // Extract unique categories
      const productCats = [...new Set(res2.map((x) => x.category))];
      setCats(productCats);
    }
    apiCalling();
  }, []);

  function filterCatFuncHandler(c) {
    if(c=="all"){
    const filteredData = data;
    console.log(filteredData,"all  25")
    setFilData(filteredData);
    }
    const filteredData = data.filter((x) => x.category === c);
    setFilData(filteredData);
  }
  console.log(filData,"after all btn clcik")

  return (
    <div className="products-container">
      {/* Category Buttons */}
      <div className="categories">
      <button onClick={()=>setFilData(data)}>All</button>
        {cats.map((c, index) => (
          <button key={index} onClick={() => filterCatFuncHandler(c)}>
            {c}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="cards-container">
        {
          filData.length >0 ? 
          filData.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} className="card-image" />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-price">${item.price}</p>
            <p className="card-desc">{item.description}</p>
          </div>
        ))
          :"items not found "
        }
      </div>
    </div>
  );
};

export default Products;



// state updation
// re-rendering 