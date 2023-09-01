import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestuarantMenu = () => {
  const [menu, setMenu] = useState([]);
  const { id } = useParams();
  function custom(msg) {
    return console.log(msg);
  }
  custom(id);
  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const parsing = await res.json();
    setMenu(parsing);
    custom(parsing);
  };
  custom(setMenu)
  custom(menu?.data?.cards[0]?.card?.card?.info?.name);
  const resName = menu?.data?.cards[0]?.card?.card?.info?.name;
  const avg = menu?.data?.cards[0]?.card?.card?.info?.avgRatingString;
  const cuisine = menu?.data?.cards[0]?.card?.card?.info?.cuisines;
  const totalRatingsString =
    menu?.data?.cards[0]?.card?.card?.info?.totalRatingsString;
  return (
    <div className="flex_MEnu">
      <div>
        <h1> {resName}</h1>
        <p>{cuisine?.join(",")}</p>
      </div>
      <div>
        <h1>{avg}</h1>
        <p>{totalRatingsString}</p>
      </div>
    </div>
  );
};

export default RestuarantMenu;
