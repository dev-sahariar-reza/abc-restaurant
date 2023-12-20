import { useEffect, useState } from "react";
import HomeCard from "../../../components/Cards/HomeCard/HomeCard";

const ChefRecommend = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) =>
        setMenu(data.filter((item) => item.category === "popular"))
      );
  }, []);

  return (
    <section className="abc-container">
      <h1 className="abc-section-title">Chef Recommendation</h1>
      <div className="abc-home-chef-recommend-grid">
        {menu.map((item) => (
          <HomeCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ChefRecommend;
