import React, { useState, useEffect } from "react";
import Rest from "../utils/MockData";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
const Body = () => {
  const [state, setstate] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filtered, setFiltered] = useState([]);
  const Search = () => {
    setSearchText(" ");
    const NewSearch = state.filter((val) =>
      val?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );

    setFiltered(NewSearch);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(state)
  const fetchData = async () => {
    const fetched = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LIS"
    );
    const result = await fetched.json();
    setFiltered(
      result?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setstate(
      result?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return (
    <>
      {state?.length > 0 ? (
        <div className="body_container">
          <div className="">
            <input
              className="search"
              placeholder="Search.."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="top_rated" onClick={Search}>
              Search
            </button>
            <button
              className="top_rated"
              onClick={() => {
                const filteredList = state?.filter(
                  (val) => val.info.avgRating > 4.3
                );
                setFiltered(filteredList);
                console.log("filteredList", filteredList);
              }}
            >
              Top Rated Restuarants
            </button>
          </div>
          <div className="cards_flex">
            {filtered?.map((val, ind) => (
              <Cards data={val} key={val.info.cloudinaryImageId} />
            ))}
          </div>
        </div>
      ) : (
        <div className="cards_flex" style={{padding:"2rem 2rem"}}>
      {  [1, 2, 3, 4, 5, 6].map((val, ind) => <Shimmer key={ind} /> )}
        </div> )}
      
    </>
  );
};

export default Body;
