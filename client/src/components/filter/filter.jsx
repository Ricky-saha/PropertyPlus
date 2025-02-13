import { useSearchParams } from "react-router-dom";
import "./filter.scss"
import { useState } from "react";

const Filter = () => {

  const [searchParams, setSearchParams]= useSearchParams();
  const [query, setQuery]= useState({
    type:searchParams.get("type") || "",
    city:searchParams.get("city") || "",
    property:searchParams.get("property") || "",
    minPrice:searchParams.get("minPrice") || 0,
    maxPrice:searchParams.get("maxPrice") || 100000,
    bedroom:searchParams.get("bedroom") || 1,
  });


  const handleChange =(e)=>{
    setQuery ({
      ...query,
      [e.target.name]: e.target.value,
    })
  }


  const handleFilter =(e)=>{
    setSearchParams(query);
  }


  console.log(searchParams.get("city"));



  return (
    <div className="filter">
      
      <h1>Search results for <b>{searchParams.get('city')}</b></h1>

      <div className="top">

        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text"  id = "city" name="city" placeholder ="City Location" onChange={handleChange} defaultValue={query.city} />
        </div>

      </div>

      <div className="bottom">

        <div className="item">
          <label htmlFor="type">Location</label>
          <select name="type" id="type" onChange={handleChange} defaultValue={query.type}>
            <option value="any">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
  
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property" onChange={handleChange} defaultValue={query.property}>
            <option value="any">Any</option>
            <option value="apartment">Apartments</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="Flats">Flats</option>
          </select>
        </div>
      
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number"  id = "minPrice" name="minPrice" placeholder ="Any"  onChange={handleChange} defaultValue={query.minPrice}/>
        </div>

        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="number"  id = "maxPrice" name="naxPrice" placeholder ="Any"  onChange={handleChange} defaultValue={query.maxPrice}/>
        </div>

        <div className="item">
          <label htmlFor="bedroom">bedroom</label>
          <input type="text"  id = "bedroom" name="bedroom" placeholder ="Any" onChange={handleChange} defaultValue={query.bedroom} />
        </div>

        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>

      </div>

    </div>
  )
}

export default Filter
