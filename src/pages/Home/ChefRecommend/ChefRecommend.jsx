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

      <div className="text-center">
        <button className="btn btn-outline">View Full Menu</button>
      </div>

      <div className="call-us-box">
        <h1 className="call-us-text">call us: +88-01740759249</h1>
      </div>
    </section>
  );
};

export default ChefRecommend;
